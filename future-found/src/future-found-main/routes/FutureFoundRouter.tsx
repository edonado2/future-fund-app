import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"

export const FutureFoundRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </>
  )
}

