import { Link, Route, Routes } from "react-router-dom"
import Login from "./Login"

export default function Auth() {
  return (
    <div>
      <Login />
      <Link to={"/auth/register"}>회원가입</Link>
    </div>
  )
}
