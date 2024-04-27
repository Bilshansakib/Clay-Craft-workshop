import { Link } from "react-router-dom";

const MyCraftCard = ({ craft }) => {
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
            <button className="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
