import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CardStory from "../components/Story/CardStory";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";
import { getDataProfile } from "../utils/FetchData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IFullDataStory } from "../Types/Story-type";

interface IProps {
  data: IFullDataStory;
}
const Home: NextPage<IProps> = ({ data }) => {
  // console.log(data, "< getServerSide");
  return (
    <>
      {/* <Layout> */}
      <div className="w-full min-h-screen xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 dark:bg-bgDark bg-yellowLight">
        <CardStory data={data} />
      </div>
      {/* </Layout> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await getDataProfile("story/getAllStories");
  const title = res.data.title;
  // const title = res.data.title
  return {
    props: {
      data: res.data,
    },
  };
};

export default Home;
