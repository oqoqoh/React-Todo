import axios from "axios";
import { useEffect, useState } from "react";
import { NaverApi } from "./config";
import "./App.css";

function App() {
  const [temp, setTemp] = useState({});

  useEffect(() => {
    console.log(NaverApi.clientId);
    console.log(NaverApi.url);
    axios
      .get("/api/v1/search/book.json", {
        params: { query: "무라카미 하루키" },
        headers: {
          "X-Naver-Client-Id": NaverApi.clientId,
          "X-Naver-Client-Secret": NaverApi.clientSecret,
        },
      })
      .then((res) => {
        console.log("res", res.data.items);
        //let temp = res.data.items[0];
        setTemp(res.data.items[0]);
      });
  }, []);
  return (
    <>
      <div>hello</div>
      <h3>{temp.description}</h3>
      <img src={temp.image} />
    </>
  );
}

export default App;
