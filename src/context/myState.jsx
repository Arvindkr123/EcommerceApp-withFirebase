import React, { useState } from "react";
import MyContext from "./myContext";
import { toast } from 'react-toastify';
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import { useEffect } from "react";


const MyState = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([])
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add the product function
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products")
      await addDoc(productRef, products);
      getProductData();
      toast.success("Add product successfully!!!");
      window.location.href = "/dashboard"
      setProducts({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        description: "",
      })
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  };

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    getProductData();
  }, [])


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = rgb(17, 24, 39);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, product, addProduct }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyState;
