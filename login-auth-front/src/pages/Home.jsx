import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home - Auth";
  }, []);

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <section className="flex flex-1 flex-col justify-center items-center bg-white px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-center">
          Welcome!
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          Manage your tasks, boost your productivity, and achieve your goals.
          Sign in or create an account to get started!
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer bg-purple-900 text-white px-6 py-2 rounded-lg text-lg font-medium shadow-md transition-all duration-200 hover:bg-purple-700 hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer border border-purple-900 text-purple-900 px-6 py-2 rounded-lg text-lg font-medium shadow-md transition-all duration-200 hover:bg-purple-900 hover:text-white hover:scale-105"
          >
            Signup
          </button>
        </div>
      </section>

      <section className="flex-1 hidden md:flex items-center justify-center animated-gradient">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          Start your journey today
        </h2>
      </section>
    </main>
  );
};

export default Home;
