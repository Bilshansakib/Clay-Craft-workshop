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
            }
          });
      }
    });
  };

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {item?.map((c) => (
          //   <MyCraftCard key={craft._id} craft={craft}></MyCraftCard>
          //   photo,
          //   itemName,
          //   subCategoryName,
          //   shortDescription,
          //   price,
          //   rating,
          //   customization,
          //   processingTime,
          //   stockStatus,
          //   userEmail,
          //   userName,
          <>
            <div className="">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={c.photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {c.itemName}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{c.shortDescription}</p>
                  <div className="flex justify-between">
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>{c.price}</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>{c.rating}</span>
                      </button>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>{c.customization}</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>{c.processingTime}</span>
                      </button>
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    <Link to={`/crafts/${c._id}`}>
                      <button className="btn">update</button>
                    </Link>
                    <button onClick={() => handleDelete(c._id)} className="btn">
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
