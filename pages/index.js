import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/Navbar";
import Button from "../components/Button";
import PlayerProfileHeader from "../components/PlayerProfileHeader";
import StatTable from "../components/StatTable";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Fantasy Trade Ceneter | Fantasy Sports Trade Calculator</title>
        <meta name="description" content="todo change me to SEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="grid grid-cols-3 grid-rows-3 place-items-center h-screen">
        <div class="col-start-2 row-start-2 ">
          <div class="text-5xl text-slate-400 text-center">
            Alex James Hardy
          </div>
          <div class="text-5xl text-slate-300 text-center mt-10">
            33.4372786, -111.4527465
          </div>
          <div class="text-xl text-slate-400 text-center mt-10">
            "If love alone were enough to save you, you would have lived
            forever."
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
