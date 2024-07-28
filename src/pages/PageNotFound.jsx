import { useNavigate } from "react-router-dom"
import useTitle from "../hooks/useTitle";

export const PageNotFound = () => {

  const navigate = useNavigate();
  useTitle(`404 error Page not found`)

  return (
    <section className=" min-h-[72vh] py-7">
      <div className="flex flex-col items-center">
        <div className="max-[500px]:text-lg text-5xl mb-7 " >404! Page Not Found</div>
        <button onClick={() => navigate("/")} className="max-[500px]:text-xs text-xl hover:text-white p-5 border border-black rounded-lg hover:bg-slate-500">BACK TO HOME</button>
      </div>
    </section>
  )
}
