import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { axiosC } from "./../../axios"
// import axios from "axios"
import Head from "../home/Head"

export default function Detail() {
  //members 상태 관리
  const [loading, setLoading] = useState(true)
  const [board, setBoard] = useState()

  const { id } = useParams()

  const getBoard = () => {
    axiosC.get(`http://3.39.32.181:8001/api/board/${id}`).then((res) => {
      setBoard(res.data.board[0])
      setLoading((current) => !current)
    })
  }

  useEffect(() => {
    getBoard()
  }, [])

  return (
    <div>
      <Head />
      <div className="board_detail">
        <div className="small_box">
          {loading ? null : (
            <div className="map_box">
              <h1>{board.b_title}</h1>
              <h2 className="name">@ {board.u_name}</h2>
              <div className="detail_box">
                <h2 className="detail">{board.b_detail}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
