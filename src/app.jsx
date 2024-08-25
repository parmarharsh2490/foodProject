import { Route, Router, Routes } from "react-router-dom"
import Food from "./Food"

const App = () => {
  return (
   <>
   <Routes>
    <Route index element={<Food/>}></Route>
   </Routes>
   </>
  )
}

export default App