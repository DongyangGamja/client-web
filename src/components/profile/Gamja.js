import { useEffect, useState } from "react"
import { axiosC } from "../../axios"
import gamja from "./../public/potato5.png"
import axios from "axios"

export default function Gamja() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const id = localStorage.getItem("loginId")
  const url = `http://3.39.32.181:8001/api/profile/gamja/${id}`
  axios.get(url).then((res) => {
    setData(res.data.data[0])
    setLoading(false)
  })
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.data[0])
      setLoading(false)
    })
  }, [])
  return (
    <div className="gamja">
      <img src={gamja} />
      {loading ? null : <h2>LV.1 {data.g_name}</h2>}
    </div>
  )
}
