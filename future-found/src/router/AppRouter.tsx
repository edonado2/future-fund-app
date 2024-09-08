import { Route, Routes } from "react-router-dom"
import { FutureFoundRouter } from "../future-found-main/routes/FutureFoundRouter"
import { LoginPage } from "../future-found-main/pages/LoginPage"
import { SignUpPage } from "../future-found-main/pages/SignUpPage"
import { HomePage } from "../future-found-main/pages/HomePage"

export const AppRouter = () => {
  return (
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/signup" element={<SignUpPage/>}/>
     <Route path="/*" element={<FutureFoundRouter/>}/>
   </Routes>
  )
}

