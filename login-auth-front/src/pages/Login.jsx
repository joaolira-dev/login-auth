import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import AlertModal from "../components/AlertModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - Auth";
  }, []);

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await api.post("/auth/login", { email, password });
      setSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message || "Error to try login");
    }
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  const form = (
    <form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* MODAL DE ERRO OU SUCESSO */}
      {error && (
        <AlertModal
          type="error"
          message={error}
          onClose={() => setError("")}
        />
      )}
      {success && (
        <AlertModal
          type="success"
          message="Login successful!"
          onClose={() => setSuccess(false)}
        />
      )}
      <div className="flex-col flex gap-2">
        <div className="flex items-center justify-center">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <p className="bg-purple-900 text-white rounded-tr-[8px] py-2.5 px-3 rounded-br-[8px] ">
            <FontAwesomeIcon icon={faEnvelope}/>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <p className="bg-purple-900 text-white py-2.5 px-3 rounded-tr-[8px] rounded-br-[8px]">
            <FontAwesomeIcon icon={faLock}/>
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="cursor-pointer py-1 rounded-lg text-lg font-medium border-none bg-purple-900 text-white w-full max-w-xs shadow-xl mt-4 transition-all duration-200 hover:bg-purple-700 hover:scale-105"
      >
        Login Now
      </button>
    </form>
  );

  return (
    <Layout
      title="Login into your account"
      secondaryBtnText="Signup Now"
      formComponent={form}
      handleNavigate={handleNavigate}
    />
  );
};

export default Login;