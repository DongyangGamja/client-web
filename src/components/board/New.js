import axios from "axios"
import { useState } from "react"

export default function New() {
  const [title, setTitle] = useState()
  const [datail, setDatail] = useState()

  const onClick = () => {
    console.log(title + datail)
    axios({
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
      url: "http://localhost:8001/api/board/new",
      method: "post",
      data: {
        id: "admin",
        title: title,
        detail: datail,
      },
    }).then((res) => {
      if (res.data.result) {
        window.alert("게시글 생성 성공")
        window.location.replace("/main")
      } else {
        window.alert("게시글 실패, 다시 하세요.")
      }
    })
  }

  return (
    <div>
      <h1>New Content</h1>
      TITLE : <input type="text" onChange={(e) => setTitle(e.target.value)} />
      DETAIL : <input type="text" onChange={(e) => setDatail(e.target.value)} />
      <button onClick={onClick}>CREATE</button>
    </div>
  )
}
