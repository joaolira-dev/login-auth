import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import AlertModal from "../components/AlertModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = "Signup - Auth";
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !email || !password || !repeatPassword) {
      setError("Preencha todos os campos.");
      return;
    }
    if (password !== repeatPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await api.post("/auth/register", { name, email, password });
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Error at create account");
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  const form = (
    <form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* MODAIS DE ERRO E SUCESSO */}
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
          message="Account created with sucess!"
          onClose={() => setSuccess(false)}
        />
      )}
      <div className="flex-col flex gap-2">
        <div className="flex items-center justify-center">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          />
          <p className="bg-purple-900 text-white rounded-tr-[8px] py-2.5 px-3 rounded-br-[8px] ">
            <FontAwesomeIcon icon={faUser}/>
          </p>
        </div>
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
        <div className="flex items-center justify-center">
          <Input
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            placeholder="Repeat your password"
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
        Signup Now
      </button>
    </form>
  );

  return (
    <Layout
      title="Create your account"
      secondaryBtnText="Login Now"
      formComponent={form}
      handleNavigate={handleNavigate}
    />
  );
};

export default Signup;