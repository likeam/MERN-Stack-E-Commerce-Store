import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./pages/Auth/Navigation";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className=" py-3">
        <Outlet />
      </main>
    </>
  );
}
