import Footer from "./Footer";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "./ProductsContext";

export default function Layout({children}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  const [success,setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <div className="p-5">
        {success && (
          <div className="bg-green-400 w-full text-white py-2 px-4 rounded-xl mb-4">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
}