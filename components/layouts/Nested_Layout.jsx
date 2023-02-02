import { Children, useEffect } from "react"
import Footer from "../Footer"
import Header from "../Header"
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authenticatedTrue, authenticatedFalse } from "../../features/Auth/AuthSlice";

export default function NestedLayout({ Children }) {
  // const dispatch = useDispatch();

  // const checkAuthState = () => {
  //   try {
  //     const token = Cookies.get("token");
  //     if (token) {
  //       dispatch(authenticatedTrue());
  //     } else {
  //       dispatch(authenticatedFalse());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   checkAuthState();
  // }, []);

  return (
    <>
      {/* <Header />{Children}<Footer /> */}
    </>
  )
}