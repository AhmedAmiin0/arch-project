import { useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  errorAlertAction,
  notificationContext,
  successAlertAction,
} from "../context/NotificationsContext";
import useAuth from "./useAuth";

export const useQuery = (url, page = 1, pageSize, locale) => {
  const [rowCount, setRowCount] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [notify, dispatch] = useContext(notificationContext);
  const { logout } = useAuth();

  // if(page == 0) page = 1;
  useEffect(() => {
    page++;
    let active = true;
    setIsLoading(true);
    setRowCount(undefined);
    axios
      .get(`${url}?q=${query}&page=${page}&limit=${pageSize}`, {
        headers: { "Accept-Language": locale },
      })
      .then((res) => {
        if (!active) {
          return;
        }
        setData(res.data.data);
        // console.log(res);
        setIsLoading(false);
        // console.log(res.data);
        setRowCount(res.data.meta.total);
      })
      .catch((err) => {
        if (!active) {
          return;
        }
        if (err.response.status === 401) logout();
        setIsLoading(false);
        console.log(err);
      });
    return () => {
      active = false;
    };
  }, [page, pageSize, query, locale]);

  const handleDelete = async (id) => {
    try {
      let rows = data;
      await axios.delete(`${url}/${id}`);
      rows = data.filter((row) => row.id !== id);
      setData(rows);
      dispatch(successAlertAction("Item deleted successfully"));
    } catch (e) {
      if (e.response.status === 401) logout();
      dispatch(errorAlertAction("Item could not be deleted"));
    }
  };
  return { data, isLoading, rowCount, setQuery, handleDelete };
};
