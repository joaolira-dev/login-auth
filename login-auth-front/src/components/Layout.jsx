import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/svg/logo.svg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Layout = ({ title, secondaryBtnText, formComponent, handleNavigate }) => {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen">
      <section className="flex flex-col items-center justify-center flex-1 gap-2">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-120 text-xl text-purple-900" />
        </Link>

        <img src={Logo} />
        <h2 className="text-xl font-bold mb-8">{title}</h2>

        {formComponent}

        <div className="flex items-center w-full my-2 max-w-xs">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={handleNavigate}
          className="cursor-pointer py-1 rounded-lg text-lg font-medium border border-purple-900 text-indigo-500 bg-white w-full max-w-xs transition-all duration-200 hover:bg-purple-900 hover:text-white hover:scale-105"
        >
          {secondaryBtnText}
        </button>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 flex-1 h-screen  animated-gradient bg-gradient-to-br from-purple-700 via-purple-500 to-indigo-500">
        <h1 className="mt-4 font-bold text-3xl text-white drop-shadow-lg">
          Ready to get started?
        </h1>
      </section>
    </main>
  );
};

export default Layout;
