import { useEffect, useState } from "react";
import useAuth from "../components/Hooks/UseAuth";
import MyCraftCard from "../components/MyCraftCard/MyCraftCard";

const MyArtAndCraftList = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [user]);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {item?.map((craft) => (
          <MyCraftCard key={craft._id} craft={craft}></MyCraftCard>
        ))}
      </div>
    </section>
  );
};

export default MyArtAndCraftList;
