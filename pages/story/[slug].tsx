import { GetStaticPaths } from "next";
import React, { useContext, Fragment } from "react";
import { rootContext } from "../../Context/ContextStore";
import { getDataProfile, postDataAPI } from "../../utils/FetchData";
import { useRouter } from "next/router";
import { IDataStory } from "../../Types/Story-type";
import DetailStory from "../../components/Story/DetailStory";
import { Prism } from "react-syntax-highlighter";
import { dracula as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { NextSeo } from "next-seo";
import "prismjs/themes/prism-tomorrow.css";
import ReactMarkdown from "react-markdown";
interface IProps {
  data: IDataStory;
}
const StoryDetail: React.FC<IProps> = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;

  const { state, dispatch } = useContext(rootContext);
  // console.log(data, "< DATA GETSTATICPATHS");
  const { User } = state;
  return (
    <Fragment>
      <NextSeo title={data.title} />
      <div className="w-full min-h-screen xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 dark:bg-bgDark bg-yellowLight">
        {/* <DetailStory data={data} /> */}
      </div>
    </Fragment>
  );
};

interface IParams {
  slug: string;
}

export interface IUser {
  _id: string;
  username: string;
  photo: string;
  email: string;
  role: string;
  readList: any;
  readListLength: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  let token: string | undefined | null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const res = await postDataAPI(
    `story/${slug}`,
    { activeUser: "testing" },
    token
  );
  const data = res.data.data;
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context: any) => {
  const res = await getDataProfile("story/getAllStories");
  const data = res.data.data;
  const paths = data.map((item: IDataStory) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default StoryDetail;
