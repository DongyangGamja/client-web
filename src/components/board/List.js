import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
import { Link } from "react-router-dom"
import Head from "../home/Head"

export default function List(props) {
  //members 상태 관리
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(true)
  const [boards, setBoards] = useState([])
  const [data, setData] = useState()

  const newBtn = () => {
    if (localStorage.getItem("accessToken")) {
      axiosC.get("http://3.39.32.181:8001/jwt").then((res) => {
        if (!res.data.result) {
          window.alert("로그인 하세요!")
          window.location.replace("/auth")
        } else {
          window.location.replace("/board/new")
        }
      })
    } else {
      window.alert("로그인 하세요!")
      window.location.replace("/auth")
    }
  }

  const press = (e) => {
    setSearched((current) => !current)
    if (e.key === "Enter") {
      if (data != null) {
        setSearched(true)
      } else {
        setSearched(false)
      }
    } else {
      setSearched(false)
    }
  }

  useEffect(() => {
    console.log(searched)
    setLoading(true)
    searched
      ? axiosC({
          url: "http://3.39.32.181:8001/api/board",
          method: "post",
          data: {
            title: data,
          },
        }).then((res) => {
          setBoards(res.data.boards.reverse())
          setLoading(false)
        })
      : axiosC({
          method: "get",
          url: "http://3.39.32.181:8001/api/board",
        }).then((res) => {
          setBoards(res.data.boards.reverse())
          setLoading(false)
        })
  }, [searched])

  return (
    <div>
      <Head />
      <div className="board_search">
        <h1>게시글을 검색하세요.</h1>
        <input
          onKeyPress={press}
          type="text"
          onChange={(e) => setData(e.target.value)}
        />
        <br />
        <button onClick={newBtn}>게시글 만들기</button>
      </div>
      <div className="board_list">
        {boards.map((item) => (
          <Link to={`/board/${item.b_id}`} key={item.b_id}>
            <div className="block">
              <h1>{item.b_title}</h1>
              <h3>
                @ {item.u_name} #{item.b_date}
              </h3>
              <p>{item.b_detail}</p>
            </div>
            <br />
          </Link>
        ))}
      </div>
    </div>
  )
}
