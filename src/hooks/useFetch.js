import { useEffect, useState } from "react";

// Custom Hook has to start with 'use...'
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // This fires on every render unless there is []
  useEffect(() => {
    // we use abort controller to cancel the fetch process if we moved to another component
    const abortCont = new AbortController();


      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch data from server");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null); // to stop seeing error on resolved
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError(err.message);
            setIsPending(null); // to stop seeing loading message when error
          }
        });


    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
