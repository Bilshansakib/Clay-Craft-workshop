import { Link, useLoaderData, useRouteError } from "react-router-dom";
import CraftCard from "../components/CraftCard/CraftCard";
import { useState } from "react";
import SwiperImage from "../components/SwiperImage/SwiperImage";
import Header from "../components/Header/Header";
import NewsSection from "../components/NewsSection/NewsSection";

const HomePage = () => {
  const crafts = useLoaderData();
  const [darkMode, setDarkMode] = useState(false);
  const err = useRouteError();
  console.log(darkMode);
  return (
    <>
      <div className="w-full bg-cover h-[400px]  lg:h-[600px] ">
        <Header></Header>
      </div>
      <div
        className={`container ${
          darkMode ? "dark" : ""
        }  border-2 mx-auto items-center dark:bg-[#0F172A] justify-center p-4`}
      >
        {/* <div className="w-full bg-cover h-[500px] ">
          <Header></Header>
        </div> */}
        <h1 className="text-center">Art and Craft Available {crafts.length}</h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {crafts.slice(0, 6).map((craft) => (
            <CraftCard
              setDarkMode={setDarkMode}
              darkMode={darkMode}
              key={craft._id}
              craft={craft}
            ></CraftCard>
          ))}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {crafts.map((a) => (
            <>
              <Link>
                <div
                  style={{ backgroundImage: `url("${a.photo}")` }}
                  className="w-36 h-36 object-cover rounded-2xl bg-cover m-6 "
                >
                  <h2 className="font-bold text-sm pt-2 text-white flex justify-center text-center">
                    {a.subCategoryName}
                  </h2>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <div>
        <SwiperImage></SwiperImage>
      </div>
      <div className="w-full">
        <NewsSection></NewsSection>
      </div>
    </>
  );
};

export default HomePage;
