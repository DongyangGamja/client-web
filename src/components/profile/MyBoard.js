import { axiosC } from "../../axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function MyBoard() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axiosC({
      url: `http://3.39.32.181:8001/api/profile/board/${localStorage.getItem(
        "loginId"
      )}`,
      method: "get",
    }).then((res) => {
      setData(res.data.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="myboard">
      <h1>Board List</h1>
      <ol>
        {loading
          ? null
          : data.map((item) => (
              <Link to={`/board/${item.b_id}`}>
                <li key={item.b}>{item.b_title}</li>
              </Link>
            ))}
      </ol>
    </div>
  )
}
