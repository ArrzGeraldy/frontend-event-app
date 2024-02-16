import { useAuthContext } from "./useAuthContext";
interface AuthContextType {
  dispatch: (action: any) => void;
}

export const useLogout = () => {
  const { dispatch } = useAuthContext() as AuthContextType;

  const logout = () => {
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT", payload: null });
  };

  return { logout };
};
