import { useEffect, useState } from "react";
import useAuth from "../components/Hooks/UseAuth";
import MyCraftCard from "../components/MyCraftCard/MyCraftCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  const [controlDelete, setControlDelete] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [user, controlDelete]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setControlDelete(!controlDelete);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //   const remainingCraft = currentUser.filter(
              //     (craft) => craft._id !== id
              //   );
              //   setCurrentUser(remainingCraft);
            }
          });
      }
    });
  };

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {item?.map((craft) => (
          //   <MyCraftCard key={craft._id} craft={craft}></MyCraftCard>
          <>
            <div className="">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={craft.photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {craft.itemName}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <Link to={`/crafts/${craft._id}`}>
                      <button className="btn">update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default MyArtAndCraftList;
