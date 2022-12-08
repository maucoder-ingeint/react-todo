import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          let localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error)
        }
      }, 3000);
    });
  
    const saveItem = (newItems) => {
      try {
        const stringifiedItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifiedItems);
  
        setItem(newItems);
      } catch(error) {
        setError(error)
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
};

export { useLocalStorage };
