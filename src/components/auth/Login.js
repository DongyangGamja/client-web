import { useState } from "react"
import axios from "axios"

export default function Login() {
  const [inputId, setInputId] = useState()
  const [inputPw, setInputPw] = useState()

  const getLogin = () => {
    axios({
      url: "http://localhost:8001/api/auth/login",
      method: "post",
      withCredentials: true,
      data: {
        id: inputId,
        pw: inputPw,
      },
    })
      .then((res) => {
        if (res.data.result) {
          localStorage.setItem("accessToken", res.data.token)
          window.location.replace("/main")
        } else {
          window.alert("로그인 실패")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="ID"
        type="text"
        onChange={(e) => setInputId(e.target.value)}
      />
      <br />
      <input
        placeholder="PW"
        type="password"
        onChange={(e) => setInputPw(e.target.value)}
      />
      <br />
      <button onClick={getLogin}>LOGIN</button>
    </div>
  )
}
