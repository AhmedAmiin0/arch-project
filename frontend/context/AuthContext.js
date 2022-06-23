import { createContext, useReducer } from "react";
export const UserContext = createContext({
  user: '',
  setUser:()=>{}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState( '');
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
