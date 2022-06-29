import axios from "../config/axios";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import cookies from "next-cookies";
import {
  errorAlertAction,
  notificationContext,
  successAlertAction,
} from "../context/NotificationsContext";
const useAuth = () => {
  const [error, setError] = useState(null);
  const [notify, dispatch] = useContext(notificationContext);
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
      dispatch(successAlertAction("Login successful"));
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      setLoading(true);
      await axios.post("/logout");
      setLoading(false);
      router.push("/admin/login");
    } catch (err) {
      dispatch(errorAlertAction("Logout failed"));
      setLoading(false);
      console.log(err);
    }
  };
  return {
    login,
    logout,
    error,
    loading,
  };
};
export default useAuth;
export const checkAuth = async (ctx, fn) => {
  const { token } = cookies(ctx);
  let item = null;
  try {
    if (!token || token === "" || token === null) return false;
    item = await fn();
  } catch (e) {
    return false;
  }
  return item;
};
