import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ craft }) => {
  const loadedCraft = useLoaderData();
  const [currentUser, setCurrentUser] = useState(loadedCraft);
  const [controlDelete, setControlDelete] = useState(false);
  const {
    _id,
    photo,
    itemName,
    subCategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
    email,
  } = craft;
  console.log(craft);

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
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {itemName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/crafts/${_id}`}>
              <button className="btn">update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
