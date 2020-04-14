import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    // application/json으로 페이로드와 함께 HTTP 요청을 하게 되면 서버가 JSON 타입으로 변환해서 사용.
    "Content-type": "application/json",
  }
});
