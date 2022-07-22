import axios from "../config/axios";
import { useContext, useState } from "react";
import {
  errorAlertAction,
  notificationContext,
  successAlertAction,
} from "../context/NotificationsContext";
import { useRouter } from "next/router";
import useAuth from "./useAuth";

export const useDelete = (locale) => {
  const [notify, dispatch] = useContext(notificationContext);
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth();
  const router = useRouter();
  const deleteItem = async (url, id = null) => {
    try {
      setIsLoading(true);
      await axios.delete(`${url}/${id}`, {
        headers: { "Accept-Language": locale },
      });
      dispatch(successAlertAction("Item deleted successfully"));
      setIsLoading(false);
      router.push("/admin/" + url);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      dispatch(errorAlertAction("Item could not be deleted"));
      if (e.response.status === 401) logout();
    }
  };
  return { deleteItem, isLoading };
};
export const useSearch = (locale) => {
  const { logout } = useAuth();
  const search = async (url, e, limit = 5, page = 1) => {
    let res = await axios
      .get(`search/${url}?q=${e.target.value}&limit=${limit}&page=${page}`, {
        headers: { "Accept-Language": locale },
      })
      .catch((e) => (e.response.status === 401 ? logout() : null));
    if (res.status === 200) {
      return res;
    }
    console.log(res);
  };
  return { search };
};
export const useCreate = (locale, url) => {
  const [notify, dispatch] = useContext(notificationContext);
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth();
  const createItem = async (data) => {
    try {
      setIsLoading(true);
      let res = await axios.post(`${url}`, data, {
        headers: { "Accept-Language": locale },
      });
      console.log(res);
      dispatch(successAlertAction("Item created successfully"));
      setIsLoading(false);
      return res;
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) logout();
      setIsLoading(false);
      typeof e.response.data.message === "string" && e.response.data.message.length > 0
        ? dispatch(errorAlertAction(e.response.data.message))
        : dispatch(errorAlertAction("Action could not be completed"));
    }
  };
  return { createItem, isLoading };
};

// const [notify, dispatch] = useContext(notificationContext);
