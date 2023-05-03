import { useEffect, useState } from "react";

const useFetchCards = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  // const [abort, setAbort] = useState(() => {});

  useEffect(() => {
    // const abortController = new AbortController();
    const fetchData = async () => {
      try {
        // const signal = abortController.signal;
        // setAbort(abortController.abort);
        const res = await fetch("https://api.joinclamp.com/v1/indexes");
        const json = await res.json();
        setResponse(json.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };

  // const [cards, setCards] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch();
  //       const data = await response.json();
  //       setCards(data.data);
  //       //console.log("fetch");
  //       console.log(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return cards;
};

export default useFetchCards;
