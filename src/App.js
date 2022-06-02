import { Route, Routes, Link } from "react-router-dom"
import Auth from "./components/auth"
import Register from "./components/auth/Register"
import Board from "./components/board"
import Detail from "./components/board/Detail"
import New from "./components/board/New"

function App() {
  return (
    <div>
      <Link to={"/"}>
        <h1>GAMJA</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/board/:id" element={<Detail />} />
        <Route path="/board/new" element={<New />} />
        <Route path="/main" element={<Board />} />
      </Routes>
    </div>
  )
}

export default App
