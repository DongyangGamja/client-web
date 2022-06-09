import Head from "../home/Head"
import Gamja from "./Gamja"
import Info from "./Info"
import Menu from "./Menu"
import MyBoard from "./MyBoard"

export default function Profile() {
  return (
    <div className="profile">
      <Head />
      <div className="profile_box">
        <Gamja />
        <Info />
        <MyBoard />
        <Menu />
      </div>
    </div>
  )
}
