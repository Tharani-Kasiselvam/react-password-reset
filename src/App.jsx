import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ForgotPassowrd from "./components/ForgotPassowrd"
import AccountRecovery from "./components/AccountRecovery"

const router = createBrowserRouter([
  {
    path : "/",
    element : <ForgotPassowrd />
  },
  {
    path : "/password-reset/:userId/:tokenStr",
    element : <AccountRecovery />
  }
])
const App = () => {
  return <RouterProvider router = {router}/>
}

export default App