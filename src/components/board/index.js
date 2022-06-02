import { Link } from "react-router-dom"
import List from "./List"

export default function Board() {
  return (
    <div>
      <h1>게시판 입니다.</h1>
      <Link to={"/board/new"}>
        <button>게시글 생성</button>
      </Link>
      <br />
      <List />
    </div>
  )
}
