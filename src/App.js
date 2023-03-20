import axios from "axios";
import { useEffect } from "react";
import { Api } from "./config";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(Api.clientId);
    console.log(Api.url);
    axios
      .get(Api.url, {
        headers: {
          "X-Naver-Client-Id": Api.clientId,
          "X-Naver-Client-Secret": Api.clientSecret,
        },
      })
      .then((data) => {
        console.log(data);
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
