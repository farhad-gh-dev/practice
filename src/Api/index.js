import axios from "axios";
import SuspenseWrapper from "./suspenseWrapper";

export const fetchQuery = (q) => {
  const promise = axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_ADDRESS}/auto-complete`,
    params: { q },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  }).then((res) => res.data.d);

  return SuspenseWrapper(promise);
};
