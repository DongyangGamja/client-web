import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function List() {
  //members 상태 관리
  const [boards, setBoards] = useState([])

  const getBoards = () => {
    axios.get("http://localhost:8001/api/board").then((res) => {
      setBoards(res.data.boards)
    })
  }

  useEffect(() => {
    getBoards()
  }, [])

  console.log(boards)

  return (
    <div>
      <ul>
        {boards.map((item) => (
          <Link to={`/board/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
