import React, { useState } from "react";
import toast from "react-hot-toast";
import { IInfoDataUser, IUpdateProfile } from "../../Types/User-type";
import { postDataAPI } from "../../utils/FetchData";
import { checkImage, uploadImage } from "../../utils/ImageUpload";
import Image from "next/image";
const CardProfile = ({ data }: { data: IInfoDataUser | undefined }) => {
  const [updateProfile, setUpdateProfile] = useState<IUpdateProfile>(
    {} as IUpdateProfile
  );

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const check = checkImage(image);
      if (check) return toast.error(check);

      const url = await uploadImage(image);
      if (url !== "") {
        console.log(url);
        const token = localStorage.getItem("token");
        const Data = {
          photo: url ? url : image,
          username: username,
          email: email,
        };
        const res = await postDataAPI("user/editProfile", Data, token);
        alert("Berhasil");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { username, image, email } = updateProfile;
  return (
    <>
      <div className="p-2 w-[50%] h-[50vh] bg-yellowNav dark:bg-blackLight">
        <div className="flex w-full flex-col justify-center">
          <Image
            className="xl:w-40 xl:h-40 lg:w-40 lg:h-40  rounded-full"
            width={100}
            height={100}
            src={`${data?.photo}`}
          />
          <div className="">
            <label className=" mx-auto w-[50%] lg:w-[40%] mt-3 h-[7vh] dark:text-white flex justify-center items-center dark:bg-BgInput dark:border-gray-500  bg-white text-blue rounded-lg shadow-lg border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
              <div>
                <svg
                  className="lg:w-6 w-5 h-5 sm:w-6 md:w-6 dark:text-[#6B7280]  my-auto mx-auto lg:h-6 md:h-6 sm:h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <p className="text-center dark:text-[#6B7280] m-auto">
                  Select a file
                </p>
              </div>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const files = e.target.files;
                  let file: any = files && files.length > 0 ? files[0] : "";
                  setUpdateProfile({
                    ...updateProfile,
                    image: file,
                    photoPrev: URL.createObjectURL(file),
                  });
                }}
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="dark:text-white">Username</h1>
          <input
            type="text"
            className="bg-yellowLight dark:bg-bgDark dark:text-gray-100 outline-none dark:border dark:border-gray-400 focus:outline-none w-full h-8 pl-3 rounded "
            defaultValue={data?.username}
          />
        </div>
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white font-semibold w-full rounded-lg py-2"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default CardProfile;
