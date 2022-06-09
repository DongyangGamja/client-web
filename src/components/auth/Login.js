import { useState } from "react"
import { axiosC } from "./../../axios"
import { Link } from "react-router-dom"
import logo from "./../public/logo_.jpg"

export default function Login() {
  const [inputId, setInputId] = useState()
  const [inputPw, setInputPw] = useState()

  const getLogin = () => {
    axiosC({
      url: "http://3.39.32.181:8001/api/auth/login",
      method: "post",
      data: {
        id: inputId,
        pw: inputPw,
      },
    })
      .then((res) => {
        if (res.data.result) {
          localStorage.setItem("accessToken", res.data.token)
          localStorage.setItem("loginId", res.data.info[1])
          localStorage.setItem("loginName", res.data.info[0])
          console.log(1, localStorage.getItem("loginName"))
          window.alert(`안녕하세요! ${localStorage.getItem("loginName")}님`)
          window.location.replace("/")
        } else {
          window.alert("로그인 실패")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="login_box">
      <div className="left_box">
        <img src={logo} />
      </div>
      <div className="right_box">
        <h1>Gamja Community</h1>
        <h3>Login</h3>
        <label className="input_id">
          <h5>아이디</h5>
          <input type="text" onChange={(e) => setInputId(e.target.value)} />
        </label>
        <label className="input_pw">
          <h5>비밀번호</h5>
          <input type="password" onChange={(e) => setInputPw(e.target.value)} />
        </label>
        <br />
        <button onClick={getLogin}>로그인</button>
      </div>
    </div>
  )
}
