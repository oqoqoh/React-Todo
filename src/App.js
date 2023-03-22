import axios from "axios";
import { useEffect } from "react";
import { Api } from "./config";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(Api.clientId);
    console.log(Api.url);
    axios
      .get("/v1/search/book.json", {
        params: { query: "고양이", display: 15 },
        headers: {
          "X-Naver-Client-Id": Api.clientId,
          "X-Naver-Client-Secret": Api.clientSecret,
        },
      })
      .then((res) => {
        console.log("res", res.data.items);
      });
  }, []);
  return (
    <>
      <div>hello</div>
      <div>hi</div>
    </>
  );
}

export default App;
