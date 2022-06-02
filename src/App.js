import { Route, Routes, Link } from "react-router-dom"
import Auth from "./components/auth"
import Register from "./components/auth/Register"
import Board from "./components/board"
import Detail from "./components/board/Detail"
import New from "./components/board/New"
import Profile from "./components/profile"
import Kcal from "./components/Kcal"
import { useEffect, useState } from "react"

function App() {
  const [logined, setLogined] = useState(false)

  useEffect(() => {
    localStorage.getItem("accessToken") ? setLogined(true) : setLogined(false)
  }, logined)

  return (
    <div>
      <Link to={"/"}>
        <h1>GAMJA</h1>
      </Link>
      {logined ? (
        <button
          onClick={() => {
            localStorage.removeItem("accessToken")
            window.location.replace("/")
          }}
        >
          로그아웃
        </button>
      ) : (
        <Link to={"/"}>
          <button>로그인</button>
        </Link>
      )}
      <Link to={"/profile"}>
        <button>Profile</button>
      </Link>
      <Link to={"/kcal"}>
        <button>칼로리 차트</button>
      </Link>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/board/:id" element={<Detail />} />
        <Route path="/board/new" element={<New />} />
        <Route path="/main" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kcal" element={<Kcal />} />
      </Routes>
    </div>
  )
}

export default App
