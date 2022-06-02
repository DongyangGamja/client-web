import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"

export default function Auth() {
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    token ? setLogined(true) : setLogined(false)
  }, [])

  return (
    <div>
      {logined ? (
        window.location.replace("/main")
      ) : (
        <div>
          <Login />
          <Link to={"/auth/register"}>회원가입</Link>
        </div>
      )}
    </div>
  )
}
