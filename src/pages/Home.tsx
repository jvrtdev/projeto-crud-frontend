import { useState } from "react"
import Cadastro from "../components/Cadastro"
import Login from "../components/Login"



export default function Home() {

    const [ loginOr, setLoginOr ] = useState<boolean>(false)

    function setLogin() {
        setLoginOr(true)
    }
    function setCadastro(){
        setLoginOr(false)
    }

    return(
        <>
            <div className="">
                <button onClick={setCadastro}>CADASTRO</button>
                <button onClick={setLogin}>LOGIN</button>
                { loginOr == false ? <Cadastro /> : <Login />}
            </div>
        </>
    )
}