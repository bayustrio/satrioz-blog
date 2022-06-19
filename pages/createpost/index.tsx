import React, { useEffect, useContext, useState, useRef } from "react";
import Link from "next/link";
import Editor from "../../components/Markdown/Editor";
import { ICreateStory, IStory } from "../../Types/Story-type";
import { checkImage, uploadImage } from "../../utils/ImageUpload";
import toast from "react-hot-toast";
import { postDataAPI } from "../../utils/FetchData";
const CreatePost = () => {
  const handleChange = () => {};

  // STATE
  const [story, setStory] = useState<IStory>({} as IStory);
  const [imgPrev, setImgPrev] = useState<any | File>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { content, image } = story;

  const title = useRef<HTMLInputElement>(null);

  //   POST HANDLE
  const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const check = checkImage(image);
      if (check) return toast.error(check);
      const url = await uploadImage(image);
      //   const file = url;
      //   console.log(url);
      if (url !== null) {
        console.log(url);
        const titles = title.current?.value;
        const Data = { title: titles, image: url, content: content };
        const token = localStorage.getItem("token");
        const res = await postDataAPI("story/addstory", Data, token);
        console.log(res.data);
        setLoading(false);

        // alert("Success");
      }
      //   if (url !== undefined) {
      //     console.log(file);
      //   }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="w-full  bg-yellowLight dark:bg-bgDark justify-between min-h-screen xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 ">
      <div className="flex bg-yellowNav dark:bg-blackCard p-3 items-center justify-center w-full flex-col">
        <div className="w-full">
          {/* TITLE */}
          <h1 className="dark:text-white font-semibold xl:text-[1.8rem] lg:text-[1.8rem]">
            Title
          </h1>
          <input
            type="text"
            ref={title}
            name="title"
            className="dark:bg-bgDark bg-yellowLight dark:text-gray-100 outline-none dark:border dark:border-gray-400 focus:outline-none w-full h-8 pl-3 rounded "
          />
        </div>

        {/* THUMBNAIL */}
        <div className="w-full">
          <h1 className="dark:text-white font-semibold xl:text-[1.8rem] lg:text-[1.8rem]">
            Thumbnail
          </h1>
          <div className="flex items-center">
            <label className=" w-[50%] lg:w-[40%] mt-3 h-[7vh] dark:text-white flex justify-center items-center dark:bg-BgInput dark:border-gray-500  bg-white text-blue rounded-lg shadow-lg border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
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
                  setStory({
                    ...story,
                    image: file,
                    // imgPreview: URL.createObjectURL(file),
                  });
                  // imgPreview: URL.createObjectURL(file),

                  setImgPrev(URL.createObjectURL(file));
                }}
                type="file"
                className="hidden"
              />
            </label>
            <div className="block my-auto h-[7vh]">
              {imgPrev && (
                <img
                  className="object-cover w-14 h-14 rounded-full"
                  src={imgPrev}
                />
              )}
            </div>
          </div>
        </div>

        {/* MARKDOWN */}
        <div className="w-full">
          <h1 className="dark:text-white font-semibold xl:text-[1.8rem] lg:text-[1.8rem]">
            Content
          </h1>
          <Editor story={story} setStory={setStory} content={content} />
        </div>

        {/* button submit */}
      </div>
      <div className="p-3">
        <button
          onClick={handlePost}
          className="py-1 text-white hover:bg-blue-600 bg-blue-500 px-36"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
