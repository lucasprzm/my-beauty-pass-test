import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </RoutesWrapper>
  );
}
