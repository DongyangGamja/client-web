import axios from "axios"
import { useEffect, useState } from "react"

export default function Kcal() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = () => {
    axios({
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
      method: "get",
      url: "http://localhost:8001/api/kcal",
    }).then((res) => {
      setData(res.data.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>
            {item.name}, {item.g}g 섭취
          </li>
        ))}
      </ul>
    </div>
  )
}
