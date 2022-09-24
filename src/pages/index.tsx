import type { NextPage } from "next";
import { DefaultLayout } from "../layout/Default";
import { HomeTemplate } from "../templates/Home";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomeTemplate />
    </DefaultLayout>
  );
};

export default Home;
