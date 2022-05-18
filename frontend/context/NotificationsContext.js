import { createContext, useReducer } from "react";
import { Alert, Snackbar } from "@mui/material";

export const notificationContext = createContext("")
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"
export const WARNING = "WARNING"
export const INFO = "INFO"
export const CLOSE = "CLOSE"
export const successAlertAction = (message) => ({ type: SUCCESS, message })
export const errorAlertAction = (message) => ({ type: ERROR, message })
const reducer = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        open: true,
        message: action.message || "Success",
        severity: 'success'
      }
    case ERROR:
      return {
        ...state,
        open: true,
        message: action.message || "Error",
        severity: 'error'
      }
    case CLOSE:
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}
export const SweetAlertProvider = ({ children }) => {
  const [notify, dispatch] = useReducer(reducer, { type: CLOSE })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: CLOSE })
  };
  return <notificationContext.Provider value={[notify, dispatch]}>
    {children}
    <Snackbar open={notify.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={notify.severity} sx={{ width: '100%' }}>
        {notify.message}
      </Alert>
    </Snackbar>
  </notificationContext.Provider>
}