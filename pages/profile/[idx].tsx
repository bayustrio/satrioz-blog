import { useContext } from "react";
import CardProfile from "../../components/Profile/CardProfile";
import { rootContext } from "../../Context/ContextStore";

const Profile = () => {
  const { state } = useContext(rootContext);

  const { User } = state;
  const { data } = User;
  return (
    <>
      <div className="w-full min-h-screen flex justify-center  xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 dark:bg-bgDark bg-yellowLight">
        <CardProfile data={data} />
      </div>
    </>
  );
};

export default Profile;
