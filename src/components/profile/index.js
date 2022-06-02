import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Profile() {
  //members 상태 관리
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState()

  const { id } = useParams()

  const getInfo = () => {
    axios({
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
      method: "get",
      url: "http://localhost:8001/api/auth/getAccount",
    }).then((res) => {
      setInfo(res.data.info[0])
      setLoading(false)
    })
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div>
      <button>수정 버튼</button>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          <h1>ID : {info.id}</h1>
          <h2>Name : {info.name}</h2>
        </div>
      )}
    </div>
  )
}
