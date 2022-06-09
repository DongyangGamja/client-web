import logo from "./../public/logo_.jpg"
import { Link } from "react-router-dom"
import { axiosC } from "../../axios"

export default function Head() {
  const clickProfile = () => {
    if (localStorage.getItem("accessToken")) {
      axiosC.get("http://3.39.32.181:8001/jwt").then((res) => {
        if (!res.data.result) {
          window.alert("로그인 하세요!")
          window.location.replace("/auth")
        } else {
          window.location.replace("/profile")
        }
      })
    } else {
      window.alert("로그인 하세요!")
      window.location.replace("/auth")
    }
  }
  const clickLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("loginId")
    localStorage.removeItem("loginName")
    window.location.replace("/")
  }
  return (
    <div className="head">
      <div className="head_logo">
        <img src={logo} />
        <h3>Gamja Community</h3>
      </div>
      <div className="head_nav">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/board"}>
          <li>Content</li>
        </Link>
        <li onClick={clickProfile}>Profile</li>
        {localStorage.getItem("accessToken") ? (
          <li onClick={clickLogout}>Logout</li>
        ) : (
          <Link to={"/auth"}>
            <li>LOGIN</li>
          </Link>
        )}
        {localStorage.getItem("accessToken") ? (
          <li>{localStorage.getItem("loginName")}님</li>
        ) : (
          <li>게스트</li>
        )}
      </div>
    </div>
  )
}
