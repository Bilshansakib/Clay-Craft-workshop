import { useEffect, useState } from "react";
import useAuth from "../components/Hooks/UseAuth";
import MyCraftCard from "../components/MyCraftCard/MyCraftCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TbCurrencyDollar } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";

const MyArtAndCraftList = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  const [controlDelete, setControlDelete] = useState(false);
  // ........
  console.log(item);
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };
  // ........>
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
  if (item.length < 1)
    return (
      <>
        <div className="container mx-auto text-center border-2 h-[60vh] items-center justify-center flex-col">
          <h2 className="mb-8 bg-[#eaddd7] font-extrabold text-5xl ">
            You Have Not Made Any Art or craft. Yet!
          </h2>
          <p className="bg-red-100 py-2">
            <Link to="/addCraftItem">
              <button className="btn-link px-6">update now</button>
            </Link>
          </p>
        </div>
      </>
    );

  return (
    <>
      <section className="container mx-auto">
        <div className="text-center rounded-xl mt-2">
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Type to search"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {item?.map((c) => (
            <>
              <div className="">
                <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                  <figure>
                    <img src={c.photo} alt="photo" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {c.itemName}
                      <div className="badge badge-secondary">
                        {c.stockStatus}
                      </div>
                    </h2>
                    <p>{c.shortDescription}</p>
                    <div className="flex justify-between">
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                          <TbCurrencyDollar size={18} />
                          <span>{c.price}</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1"
                        >
                          <RiUserStarLine />
                          <span>{c.rating}</span>
                        </button>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                          <p>customization:</p>
                          <span>{c.customization}</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1"
                        >
                          <p>In:</p>
                          <span>{c.processingTime}</span>
                        </button>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <Link to={`/crafts/${c._id}`}>
                        <button className="btn">update</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(c._id)}
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
    </>
  );
};

export default MyArtAndCraftList;
