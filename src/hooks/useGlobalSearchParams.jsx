import { useSearchParams } from "react-router-dom";

// A custom hook to globally access and modify searchParams
const useGlobalSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Helper function to set a specific parameter
  const setParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key); // Remove the param if value is falsy
    }
    setSearchParams(newParams);
  };

  // Helper function to get a specific parameter
  const getParam = (key) => {
    return searchParams.get(key);
  };

  return { getParam, setParam, searchParams };
};

export  {useGlobalSearchParams};
