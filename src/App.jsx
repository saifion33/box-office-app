import { NavLink, Outlet } from "react-router-dom";
import TitleContainer from "./components/TitleContainer";

function App() {
  return (
    <div className="App">
      <TitleContainer />
      <div className="text-center space-x-4 flex justify-center bg-gray-50">
        <NavLink to={'/'} className={({ isActive }) => isActive ? ' border-b-[3px] border-purple-600 ' : ''} >Home</NavLink>
        <NavLink to={'/starred'} className={({ isActive }) => isActive ? ' border-b-[3px] border-purple-600 ' : ''} >Starred</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default App
