import Logo from "../assets/logo.jpg";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={Logo} />
      </div>
      <span className="font-bold text-xl">Seja bem-vindo(a) *nome da pessoa</span>
    </div>
  );
}
