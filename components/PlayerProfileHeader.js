import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

export default function PlayerProfileHeader(props) {
  const { onClick, text, onHover } = props;
  return (
    <>
      <div
        className="flex flex-col items-center space-y-3 p-3 w-3/4 min-w-[250px] h-fit bg-[#FB4F14] diag-corners-tl-br sm:flex-row sm:space-x-3 
      sm:space-y-0"
      >
        {/* Player Image */}

        <img
          className="bg-black h-40 w-40 object-cover rounded-full"
          src="/6770.jpg"
        ></img>

        {/* Player Description todo: change H1 for better SEO*/}
        <div className="flex flex-row items-center space-x-2">
          <h1 className="text-white text-2xl py-1 text-left font-sans font-semibold sm:px-2">
            Joe Burrow
          </h1>
          <div className="h-1 w-1 rounded-full bg-white sm:h-2 sm:w-2" />

          <h1 className="text-white text-2xl py-1 text-left font-sans font-semibold sm:px-2">
            #9
          </h1>
        </div>
        <div
          className="flex flex-row w-full h-auto justify-evenly
        "
        >
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-sans font-thin text-white ">Team</h3>
              <p className="text-white font-semibold text-xl">CIN</p>
            </div>
            <div>
              <h3 className="font-sans font-thin text-white ">Position</h3>
              <p className="text-white font-semibold text-xl">QB</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-sans font-thin text-white ">Height</h3>
              <p className="text-white font-semibold text-xl">6'4"</p>
            </div>
            <div>
              <h3 className="font-sans font-thin text-white ">Weight</h3>
              <p className="text-white font-semibold text-xl inline">215</p>
              <p className="text-white font-light inline"> lbs</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-sans font-thin text-white ">EXP</h3>
              <p className="text-white font-semibold text-xl">3</p>
            </div>
            <div>
              <h3 className="font-sans font-thin text-white ">News</h3>
              <ArrowRightCircleIcon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
