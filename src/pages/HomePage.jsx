import { useLoaderData, useRouteError } from "react-router-dom";
import CraftCard from "../components/CraftCard/CraftCard";
import { useState } from "react";
import SwiperImage from "../components/SwiperImage/SwiperImage";

const HomePage = () => {
  const crafts = useLoaderData();
  const [darkMode, setDarkMode] = useState(false);
  const err = useRouteError();
  console.log(darkMode);
  return (
    <>
      <SwiperImage></SwiperImage>
      <div
        className={`container ${
          darkMode ? "dark" : ""
        }  border-2 mx-auto items-center dark:bg-[#0F172A] justify-center p-4`}
      >
        <h1>Total craft {crafts.length}</h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {crafts.map((craft) => (
            <CraftCard
              setDarkMode={setDarkMode}
              darkMode={darkMode}
              key={craft._id}
              craft={craft}
            ></CraftCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
