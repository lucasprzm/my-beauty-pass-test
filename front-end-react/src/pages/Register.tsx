import { FormEvent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { toast } from "react-toastify";
import { api } from "../services/api";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    api
      .post("/users/new", {
        name,
        email,
        password,
      })
      .then(({ status, data }) => {
        if (status === 201) {
          toast.success(data.message);
          navigate("/");
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
      <span className="font-bold text-xl mb-4">Cadastro</span>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4">
        <label htmlFor="name">Nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black rounded-xl mt-2 mb-4"
          type="text"
          id="name"
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black rounded-xl mt-2 mb-4"
          type="email"
          autoComplete="username"
          id="email"
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black rounded-xl mt-2 mb-4"
          type="password"
          autoComplete="new-password"
          id="password"
          required
        />
        <button className="border-2 rounded-xl mt-2 p-1" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
