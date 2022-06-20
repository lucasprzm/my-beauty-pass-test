import { FormEvent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { toast } from "react-toastify";
import { api } from "../services/api";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api
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

  // const handleSubmit = useCallback(
  //   (e: FormEvent) => {
  //     e.preventDefault();
  //     api
  //       .post("/users/new", {
  //         name,
  //         email,
  //         password,
  //       })
  //       .then(({ status, data }) => {
  //         if (status === 201) {
  //           toast.success(data.message);
  //           navigate("/");
  //         }
  //       })
  //       .catch(({ response }) => {
  //         toast.error(response.data.error);
  //       });
  //   },
  //   [name, email, password]
  // );

  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={Logo} />
      </div>
      <span className="font-bold text-xl mb-4">Cadastro</span>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4">
        <label htmlFor="">Nome</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="text-black rounded-xl mt-2 mb-4"
          type="text"
        />
        <label htmlFor="">E-mail</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="text-black rounded-xl mt-2 mb-4"
          type="email"
          autoComplete="username"
        />
        <label htmlFor="">Senha</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-black rounded-xl mt-2 mb-4"
          type="password"
          autoComplete="new-password"
        />
        <button className="border-2 rounded-xl mt-2 p-1" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
