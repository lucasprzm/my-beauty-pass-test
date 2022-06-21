import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/logo.jpg";
import { api } from "../services/api";

export function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function getName() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await api.get("/users/name", {
          headers: { authorization: `Bearer ${token}` },
        });
        setName(data.name);
      } catch (error: any) {
        navigate("/");
        toast.info("Favor realizar o login para continuar.", {
          toastId: "prevent-duplicate",
        });
        //console.log(error.response.data.error);
      }
    } else {
      toast.info("Favor realizar o login para continuar.", {
        toastId: "prevent-duplicate-2",
      });
      navigate("/");
    }
  }

  function clearLocalStorage() {
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={Logo} />
      </div>
      <span className="font-bold text-3xl">Seja bem-vindo(a) {name}</span>
      <button
        onClick={clearLocalStorage}
        className="border-2 rounded-xl mt-10 p-1 w-1/4"
        type="button"
      >
        Fazer logout
      </button>
    </div>
  );
}
