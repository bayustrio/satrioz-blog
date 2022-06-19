import Link from "next/link";
import { useContext } from "react";
import { rootContext } from "../../Context/ContextStore";

const Dropdown = () => {
  const { state } = useContext(rootContext);
  const User = state.User.data;
  const id = User?._id;
  return (
    <>
      <div className="flex absolute bg-yellowNav dark:bg-blackCard shadow w-full h-auto top-3 p-1 flex-col">
        <Link href={`/profile/${id}`}>Setting</Link>
      </div>
    </>
  );
};

export default Dropdown;
