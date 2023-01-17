import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    await axios
    .get(url).
    then((response) => {
        console.log("test")
        console.log(response.data);
        setData(response.data);
    })
    .catch((err) => {
        setError(err);
    })
    .finally(() =>{
        setLoading(false);
    })
  }, [url]);
//   console.log(data);
  return { data, error, loading };
}
export default useFetch;