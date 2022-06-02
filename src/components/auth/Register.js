import axios from "axios"
import { useState } from "react"

export default function Register() {
  let [inputId, setInputId] = useState()
  let [inputPw, setInputPw] = useState()
  let [inputPw2, setInputPw2] = useState()
  let [inputName, setInputName] = useState()

  const reqRegister = () => {
    inputPw === inputPw2
      ? axios({
          url: "http://localhost:8001/api/auth/register",
          method: "post",
          data: {
            id: inputId,
            pw: inputPw,
            name: inputName,
          },
        })
          .then((res) => {
            if (res.data.result) {
              window.alert("회원가입 성공!")
              window.location.replace("/")
            } else {
              window.alert("ERR : ID가 중복됨")
            }
          })
          .catch((err) => console.log(err))
      : window.alert("PW Error")
  }

  return (
    <div>
      <h1>Sign UP</h1>
      ID <input type="text" onChange={(e) => setInputId(e.target.value)} />
      <br />
      PW <input type="password" onChange={(e) => setInputPw(e.target.value)} />
      <br />
      PWC{" "}
      <input type="password" onChange={(e) => setInputPw2(e.target.value)} />
      <br />
      NAME <input type="text" onChange={(e) => setInputName(e.target.value)} />
      <br />
      <button onClick={reqRegister}>Sign Up</button>
    </div>
  )
}
