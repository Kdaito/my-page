// import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import Heading from "../components/Heading";
import History from "../components/History";
import Profile from "../components/Profile";

const Home: React.VFC = () => {
  return (
    <>
      <Head title="Profile" />
      <Heading/>
      <Profile/>
      <History/>
    </>
  );
};

export default Home;
