import { axiosC } from "../../axios"
import { useState, useEffect } from "react"

export default function Info() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const id = localStorage.getItem("loginId")
  console.log(id)
  useEffect(() => {
    axiosC("http://3.39.32.181:8001/api/profile/" + id).then((res) => {
      setData(res.data.data[0])
      setLoading(false)
    })
  }, [])
  return (
    <div className="info">
      {loading ? null : (
        <div>
          <h1>이름 : {data.u_name}</h1>
          <h3>ID : {data.u_id}</h3>
        </div>
      )}
    </div>
  )
}
