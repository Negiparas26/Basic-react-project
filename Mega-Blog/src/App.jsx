import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwriteService/auth'
import { login, logout } from './features/slice'
import { Header, Footer } from './components/ComponentIndex'
import { Outlet } from 'react-router-dom'


function App() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  // conditional rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
