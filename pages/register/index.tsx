import React, { useContext, useEffect, useState } from "react";
import { rootContext } from "../../Context/ContextStore";
import Layout from "../../layout/Layout";
import { HANDLE_CHANGE_REGISTER } from "../../Types/Auth-type";
import { postDataAPI } from "../../utils/FetchData";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { state, dispatch } = useContext(rootContext);

  // STATE
  const [SPassword, setSPassword] = useState<boolean>(false);
  const [SConfPassword, setSConfPassword] = useState<boolean>(false);
  const { username, email, password, confirmPassword } = state.Auth;
  const [warning, setWarning] = useState<boolean>(false);

  // ONCLICK SUBMIT
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (warning) return;
    else {
      const Data = { username, email, password };
      try {
        const res = await postDataAPI("auth/register", Data);
        console.log(res);
        toast.success("Successfull Register Users");
      } catch (err: any) {
        console.log(err);
        toast.error(err.response.data.error);
      }
    }
  };

  // ONCHANGE REGISTER
  const changeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: HANDLE_CHANGE_REGISTER,
      payload: { name, value },
    });
    // console.log(state.Auth);
  };

  // logic password and confirm password if not same
  useEffect(() => {
    if (password !== confirmPassword) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [password, warning, confirmPassword]);

  return (
    <>
      <Toaster />
      <div className="w-full min-h-screen flex items-center xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 dark:bg-bgDark bg-yellowLight">
        <div className="flex items-center justify-center w-full">
          <div className="xl:w-[40%] dark:bg-blackCard min-h-[25vh] bg-yellowNav p-2 flex flex-col gap-3 lg:w-[40%] w-full md:w-[45%]">
            <h1 className="font-bold text-[2rem] text-center dark:text-white">
              Register
            </h1>

            <div className="username">
              <h1 className="dark:text-white">Username</h1>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={changeRegister}
                value={username}
                className="dark:bg-bgDark bg-yellowLight dark:text-gray-100 outline-none dark:border dark:border-gray-400 focus:outline-none w-full h-8 pl-3 rounded "
              />
            </div>

            <div className="email">
              <h1 className="dark:text-white">Email</h1>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={changeRegister}
                value={email}
                className="dark:bg-bgDark bg-yellowLight dark:text-gray-100 outline-none dark:border dark:border-gray-400 focus:outline-none w-full h-8 pl-3 rounded "
              />
            </div>

            <div className="password ">
              <h1 className="dark:text-white">Password</h1>
              <div className="relative">
                <input
                  type={SPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={changeRegister}
                  name="password"
                  className="peer bg-yellowLight dark:bg-bgDark dark:text-gray-100 outline-none dark:border dark:border-gray-400 focus:outline-none w-full h-8 pl-3 rounded "
                />
                <div className="">
                  {SPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="peer dark:text-white h-5 w-5 absolute right-2 top-[0.33rem] cursor-pointer"
                      onClick={() => setSPassword(!SPassword)}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:text-white h-5 w-5 absolute right-2 top-[0.33rem] cursor-pointer"
                      onClick={() => setSPassword(!SPassword)}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="confirmPassword ">
              <h1 className="dark:text-white">Confirm Password</h1>
              <div className="relative w-full">
                <input
                  type={SConfPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  onChange={changeRegister}
                  name="confirmPassword"
                  value={confirmPassword}
                  className="bg-yellowLight dark:bg-bgDark dark:text-gray-100 outline-none dark:border dark:border-gray-400 focus:outline-none w-full h-8 pl-3 rounded "
                />
                <div className="">
                  {SConfPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:text-white h-5 w-5 absolute right-2 top-[0.33rem] cursor-pointer"
                      onClick={() => setSConfPassword(!SConfPassword)}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:text-white h-5 w-5 absolute right-2 top-[0.33rem] cursor-pointer"
                      onClick={() => setSConfPassword(!SConfPassword)}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                  <p
                    className={
                      warning
                        ? "text-red-500  peer-invalid:visible"
                        : "invisible"
                    }
                  >
                    Confirm Password is not the same
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  className={
                    warning
                      ? "cursor-no-drop w-full mt-4 rounded hover:bg-blue-600 font-semibold py-2 px-36 bg-blue-500 text-white"
                      : "w-full mt-4 rounded hover:bg-blue-600 font-semibold py-2 px-36 bg-blue-500 text-white"
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
