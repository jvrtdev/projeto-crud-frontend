import { useForm } from "react-hook-form";
import axios from 'axios'


export default function Login() {
    interface FormInput{
        login: string
        password: string
    }

    const { register, handleSubmit: onSubmit } = useForm<FormInput>()
    const submitApi = async (data: any) => {
        try{
            const response = await axios.post("http://localhost:3000/api/user/login", data);
            console.log("Login Realizado!", response.data)
        }
        catch(error){
            console.error(error)
        }
}
  return (
    <div className="w-full h-full">
        <h1 className=" text-center font-bold text-2xl">LOGIN</h1>

        <form onSubmit={onSubmit(submitApi)}>
            <input 
            type="text"
            placeholder="Digite o seu login"
            {...register('login')}
            />

            <input 
            type="password"
            placeholder="Digite a sua senha"
            {...register('password')}
            />

            <input type="submit" value="Enviar" />
        </form>



    </div>
  )
}
