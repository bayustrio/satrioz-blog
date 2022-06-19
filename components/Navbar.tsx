import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { rootContext } from "../Context/ContextStore";
import { HANDLE_THEME } from "../Types/Theme-type";
import { GET_DATA_USER } from "../Types/User-type";
import { InGetUser } from "../Types/Auth-type";
import Button from "./Theme/Button";
import Dropdown from "./Theme/Dropdown";
const Navbar = () => {
  const { state, dispatch } = useContext(rootContext);
  const { User } = state;
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <div className="w-full flex items-center bg-yellowNav dark:bg-bgDark justify-between h-[70px] xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 ">
      <Link href="/">
        <h1 className="font-semibold text-[1.5rem] cursor-pointer">
          Hello Nav
        </h1>
      </Link>

      <div className="flex items-center gap-5">
        <Button />
        <ul className="flex relative gap-5 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {User.success !== "" ? (
            <>
              <Link href="/createpost">
                <h1 className="dark:text-white">Create Post</h1>
              </Link>
              <div className="flex flex-col">
                <img
                  onClick={() => setDropdown(!dropdown)}
                  src={User.data?.photo}
                  className="w-12 h-12 rounded-full"
                />
                <div className="absolute top-11 w-[50%] right-14">
                  {dropdown && <Dropdown />}
                </div>
              </div>
              <Link href="/login">
                <h1
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                >
                  Logout
                </h1>
              </Link>
            </>
          ) : (
            <>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
