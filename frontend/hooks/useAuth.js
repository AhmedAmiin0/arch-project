import axios from "../config/axios";
import { useState } from "react";
import { useRouter } from "next/router";
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = async (data) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post("/login", data);
      setLoading(false);
      console.log(res);
      router.push("/admin/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      setLoading(false);
    }
  };
  const logout = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.get("/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });
      router.push("/admin/login");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      setLoading(false);
    }
  };
  const getUser = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.get("/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);
      setUser(res.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  // const checkAuth = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setToken(token);
  //     setIsLoggedIn(true);
  //     return true;
  //   }
  //   return false;
  // };

  return {
    isLoggedIn,
    login,
    logout,
    getUser,
    user,
    token,
    error,
    loading,
  };
};
export default useAuth;

