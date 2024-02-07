import { useState } from "react";
import Usercontext from "./UserContext";

// eslint-disable-next-line react/prop-types
const Usercontextprovider=({children})=>{
const [user, setUser] = useState(null)

return  (

        <Usercontext.Provider value={{user,setUser}}>
            {children}
        </Usercontext.Provider>


)

}

export default Usercontextprovider