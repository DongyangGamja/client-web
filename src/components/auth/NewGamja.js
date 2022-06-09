import { useState } from "react"
import { axiosC } from "../../axios"
import logo from "./../public/logo_.jpg"
import gamja from "./../public/potato5.png"

export default function NewGamja() {
  const [inputName, setInputName] = useState()

  const postGamja = () => {
    axiosC({
      url: "http://3.39.32.181:8001/api/gamja",
      method: "post",
      data: {
        id: localStorage.getItem("i"),
        name: inputName,
      },
    })
      .then((res) => {
        if (res.data.result) {
          localStorage.removeItem("i")
          window.alert(`회원가입 성공!`)
          window.location.replace("/")
        } else {
          window.alert("회원가입 실패")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="gamja_box">
      <div className="left_box">
        <img src={logo} />
      </div>
      <div className="right_box">
        <h1>Gamja Community</h1>
        <h3>감자 생성</h3>
        <img src={gamja} />
        <label className="gamja_name">
          <h5>감자 이름</h5>
          <input type="text" onChange={(e) => setInputName(e.target.value)} />
        </label>
        <br />
        <button onClick={postGamja}>감자 만들기</button>
      </div>
    </div>
  )
}
