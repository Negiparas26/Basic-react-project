import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
 

  return (
    <Usercontextprovider>
      <Login />
      <Profile />
    </Usercontextprovider>
  )
}

export default App
