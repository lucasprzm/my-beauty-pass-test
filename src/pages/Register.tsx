import Logo from "../assets/logo.jpg";

export function Register() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={Logo} />
      </div>
      <span className="font-bold text-xl mb-4">Cadastro</span>
      <form className="flex flex-col w-1/4">
        <label htmlFor="">Nome</label>
        <input className="text-black rounded-xl mt-2 mb-4" type="text" />
        <label htmlFor="">E-mail</label>
        <input className="text-black rounded-xl mt-2 mb-4" type="email" />
        <label htmlFor="">Senha</label>
        <input className="text-black rounded-xl mt-2 mb-4" type="password" />
        <button className="border-2 rounded-xl mt-2 p-1" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
