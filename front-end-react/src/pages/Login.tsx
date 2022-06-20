import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { api } from "../services/api";
import { toast } from "react-toastify";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    api
      .post("/users/login", {
        email,
        password,
      })
      .then(({ status, data }) => {
        if (status === 200) {
          toast.success(data.message);
          localStorage.setItem("token", data.token);
          navigate("/home");
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={Logo} />
      </div>
      <span className="font-bold text-xl mb-4">Login</span>
      <form className="flex flex-col w-1/4" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          className="text-black rounded-xl mt-2 mb-4"
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          className="text-black rounded-xl mt-2 mb-4"
          type="password"
          autoComplete="current-password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="border-2 rounded-xl mt-2 mb-4 p-1" type="submit">
          Entrar
        </button>
      </form>
      <span>
        Não tem cadastro?{" "}
        <Link className="hover:text-[#FECB9B]" to="/register">
          Cadastre-se aqui!
        </Link>
      </span>
    </div>
  );
}
