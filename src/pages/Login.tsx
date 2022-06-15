import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Register } from "./Register";

export function Login() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={Logo} />
      </div>
      <span className="font-bold text-xl mb-4">Login</span>
      <form className="flex flex-col w-1/4">
        <label htmlFor="">E-mail</label>
        <input className="text-black rounded-xl mt-2 mb-4" type="email" />
        <label htmlFor="">Senha</label>
        <input className="text-black rounded-xl mt-2 mb-4" type="password" />
        <button className="border-2 rounded-xl mt-2 mb-4 p-1" type="submit">
          Entrar
        </button>
      </form>
      <span>
        Não tem cadastro?{" "}
        <Link className="hover:text-[#FECB9B]" to="/register">
          Cadastre-se aqui!
        </Link>{" "}
      </span>
    </div>
  );
}
