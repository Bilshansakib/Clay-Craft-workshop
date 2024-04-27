import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard/CraftCard";

const HomePage = () => {
  const crafts = useLoaderData();
  return (
    <>
      <div className="container border-2 mx-auto items-center justify-center p-4">
        <h1>Total craft {crafts.length}</h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
