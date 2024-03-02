import { useDispatch } from "react-redux";
import { logout } from "../../features/slice";
import authService from "../../appwriteService/auth";

function LogoutButton(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
    )
}
export default LogoutButton;