import axios from "../config/axios";
import { useState } from "react";
import { useRouter } from "next/router";
const useAuth = () => {

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



  return {
    login,
    user,
    error,
    loading,
  };
};
export default useAuth;

