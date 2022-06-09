import { useEffect, useState } from "react"
import { axiosC } from "../../axios"

export default function Menu() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axiosC({
      url: `http://3.39.32.181:8001/api/profile/menu/${localStorage.getItem(
        "loginId"
      )}`,
      method: "get",
    }).then((res) => {
      setData(res.data.data)
      setLoading(false)
    })
  }, [])

  const menuName = (m_kind) => {
    switch (m_kind) {
      case 1:
        return "사과"
      case 2:
        return "바나나"
      case 3:
        return "당근"
    }
  }

  return (
    <div className="menu">
      <h1>Kcal List</h1>
      {loading ? null : (
        <ul>
          {data.map((item) => (
            <li key={item.m_id}>
              {menuName(item.m_kind)}를 {item.m_weight}만큼 먹었다.
              {item.m_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
