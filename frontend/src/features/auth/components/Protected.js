import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router";

export const Protected = ({ children }) => {
  const loggedInUser = useSelector(selectLoggedInUser);

  if (loggedInUser?.data.isVerified) {
    return children;
  }

  return <Navigate to={"/login"} replace={true} />;
};
