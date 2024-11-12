// Gemini AI assisted code

import React, { createContext, useState, useContext } from "react";

const ProductInfoContext = createContext();

const ProductInfoProvider = ({ children }) => {
  const [products, setProducts] = useState([
    // {
    //   id: "",
    //   name: "",
    //   number: "",
    //   websites: [],
    //   prices: [],
    // },
  ]);

  const handleAddProduct = (newProductName, newProductNumber) => {
    // debugger;
    const newProduct = {
      id: Date.now(), // Simple unique ID generation
      name: newProductName,
      number: newProductNumber,
      websites: [],
      prices: [],
    };
    setProducts([...products, newProduct]);
    console.log("After Adding", products);
  };

  const handleRemoveProduct = (id) => {
    console.log("handelRemoveProduct", id);
    setProducts(products.filter((item) => item.id !== id));
    console.log("After Removing", products);
  };

  const handleUpdateProductName = (id, newName) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const handleUpdateProductNumber = (id, newProductNumber) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, number: newProductNumber } : item
      )
    );
  };

  const handleAddProductTrackedWebsites = (
    id,
    newProductTrackedWebsitesToAdd
  ) => {
    console.log(
      "ProductInfoProvider: Before: ",
      "products websites :",
      products.websites,
      id,
      newProductTrackedWebsitesToAdd
    );
    setProducts(
      products.map((item) =>
        item.id === id
          ? {
              ...item,
              websites: [
                ...new Set([
                  ...item.websites,
                  ...newProductTrackedWebsitesToAdd,
                ]),
              ],
            }
          : item
      )
    );
    console.log(
      "ProductInfoProvider: After: ",
      products.websites,
      id,
      newProductTrackedWebsitesToAdd
    );
  };

  const handleRemoveProductTrackedWebsites = (
    id,
    productTrackedWebsitesToRemove
  ) => {
    setProducts(
      products.map((item) =>
        item.id === id
          ? {
              ...item,
              websites: item.websites.filter(
                (t) => t !== productTrackedWebsitesToRemove
              ),
              /**
               * const result = arr1.filter(item => !arr2.includes(item));
               [...new Set(result)]; // Remove duplicates
               */
            }
          : item
      )
    );
  };

  return (
    <ProductInfoContext.Provider
      value={{
        products,
        handleAddProduct,
        handleRemoveProduct,
        handleUpdateProductName,
        handleUpdateProductNumber,
        handleAddProductTrackedWebsites,
        handleRemoveProductTrackedWebsites,
      }}
    >
      {children}
    </ProductInfoContext.Provider>
  );
};

const useProductInfoContext = () => {
  return useContext(ProductInfoContext);
};

export { ProductInfoProvider, useProductInfoContext };
