import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Detail() {
  //members 상태 관리
  const [loading, setLoading] = useState(true)
  const [board, setMember] = useState()

  const { id } = useParams()

  const getBoard = () => {
    axios.get(`http://localhost:8001/api/board/${id}`).then((res) => {
      setMember(res.data.board[0])
      setLoading(false)
    })
  }

  useEffect(() => {
    getBoard()
  }, [])

  return (
    <div>
      <button>수정 버튼</button>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          <h1>제목 : {board.title}</h1>
          <h2>작성자 : {board.id}</h2>
          <h2>내용 : {board.detail}</h2>
        </div>
      )}
    </div>
  )
}
