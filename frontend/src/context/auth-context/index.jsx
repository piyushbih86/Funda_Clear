import { useState } from "react";
import { AuthContext } from "./auth-context";

export { AuthContext };

export default function AuthProvider({ children }) {
  
  const [signInFormData, setSignInFormData] = useState({
    userEmail: "",
    password: "",
  });

  const [signUpFormData, setSignUpFormData] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const handleRegisterUser = (event) => {
    event.preventDefault();
    console.log("Register:", signUpFormData);
  };

  const handleLoginUser = (event) => {
    event.preventDefault();
    console.log("Login:", signInFormData);
  };

  const value = {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}