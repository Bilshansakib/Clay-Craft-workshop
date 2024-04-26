import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard/CraftCard";

const HomePage = () => {
  const crafts = useLoaderData();
  return (
    <>
      <div>
        <h1>Total craft {crafts.length}</h1>
        <div className="grid md:grid-cols-2">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
