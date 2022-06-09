import { axiosC } from "../../axios"
import { useEffect, useState } from "react"
import Head from "../home/Head"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

export default function New() {
  const [title, setTitle] = useState()
  const [detail, setDetail] = useState()

  const onClick = () => {
    axiosC({
      url: "http://3.39.32.181:8001/api/board/new",
      method: "post",
      data: {
        id: localStorage.getItem("loginId"),
        title: title,
        detail: detail,
      },
    }).then((res) => {
      if (res.data.result) {
        window.alert("게시글 생성 성공")
        window.location.replace("/board")
      } else {
        window.alert("게시글 실패, 다시 하세요.")
      }
    })
  }

  return (
    <div>
      <Head />
      <div>
        <h1>New Content</h1>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello world</p>"
          onChange={(event, editor) => {
            const data = editor.getData().replace(/<(\/p|p)([^>]*)>/gi, "")
            setDetail(data)
          }}
        />
        <button onClick={onClick}>CREATE</button>
      </div>
    </div>
  )
}
