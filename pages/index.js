import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Alex James Hardy | We miss you every damn day</title>
      </Head>
      <div class="grid grid-cols-3 grid-rows-3 place-items-center h-screen">
        <div class="col-start-2 row-start-2 ">
          <div>
            <p className="text-5xl text-slate-400 text-center">
              Alex James Hardy
            </p>
          </div>
          <div>
            <p className="text-5xl text-slate-300 text-center mt-10">
              33.43730, -111.45243
            </p>
          </div>
          <div>
            <p className="text-xl text-slate-300 text-center mt-10">
              "If love alone were enough to save you, you would have lived
              forever."
            </p>
          </div>
          <div class="text-xl text-slate-400 text-center mt-10">
            4/5/91 - 1/17/19
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
