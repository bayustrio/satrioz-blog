import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { rootContext } from "../Context/ContextStore";
import { GET_DATA_USER } from "../Types/User-type";
import { getDataProfile } from "../utils/FetchData";
import Layout from "./Layout";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  let token: null | string;

  const { state, dispatch } = useContext(rootContext);

  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    // if (token) {
    if (token) {
      const FetchData = async () => {
        try {
          const res = await getDataProfile(`user/profile`, token);
          console.log(res);
          dispatch({
            type: GET_DATA_USER,
            payload: res.data,
          });
          // alert("Successfull");
        } catch (err: any) {
          console.log(err);
        }
      };
      FetchData();
    }
  }, []);
  return (
    <>
      <Navbar />
      {children}
      {/* <Layout> */}
      {/* </Layout> */}
    </>
  );
};

export default LayoutPage;
