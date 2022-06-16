import axios from "../config/axios";
import { useContext, useState } from "react";
import {
  errorAlertAction,
  notificationContext,
  successAlertAction,
} from "../context/NotificationsContext";
import { useRouter } from "next/router";

export const useDelete = (locale) => {
  const [notify, dispatch] = useContext(notificationContext);
  const router = useRouter();
  const deleteItem = async (url, id = null) => {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: { "Accept-Language": locale },
      });
      dispatch(successAlertAction("Item deleted successfully"));
      router.push("/admin/" + url);
    } catch (e) {
      console.log(e);
      dispatch(errorAlertAction("Item could not be deleted"));
    }
  };
  return { deleteItem };
};
export const useSearch = (locale) => {
  const search = async (url, e, limit = 5, page = 1) => {
    let res = await axios.get(
      `search/${url}?q=${e.target.value}&limit=${limit}&page=${page}`,
      { headers: { "Accept-Language": locale } }
    );
    if (res.status === 200) {
      return res;
    }
    console.log(res);
  };
  return { search };
};
export const useCreate = (locale, url) => {
  const [notify, dispatch] = useContext(notificationContext);
  const createItem = async (data, error = false) => {
    try {
      let res = await axios.post(`${url}`, data, {
        headers: { "Accept-Language": locale },
      });
      dispatch(successAlertAction("Item created successfully"));
      return res;
    } catch (e) {
      console.log(e);
      error
        ? dispatch(errorAlertAction(e.response.data.message))
        : dispatch(errorAlertAction("Item could not be created"));
    }
  };
  return { createItem };
};

// const [notify, dispatch] = useContext(notificationContext);
