import { TbCurrencyDollar } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";
import { FaGripLinesVertical } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
const CraftCard = ({ craft }) => {
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
  } = craft;

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="flex space-x-4 justify-between">
        <div className="flex space-x-4  ">
          <img
            alt=""
            src={"https://source.unsplash.com/100x100/?portrait"}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {itemName}
            </a>
            <span className="text-xs text-gray-400 dark:text-gray-600">
              {stockStatus}
            </span>
          </div>
        </div>
        <Link to={`/viewDetails/${_id}`}>
          <div className="gap-2 btn-ghost  flex justify-center items-center p-2">
            <span>
              <GrNext />
            </span>
            <span>view</span>
          </div>
        </Link>
      </div>
      <div>
        <img
          src={photo}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{subCategoryName}</h2>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {shortDescription}
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-4">
          <div className=" text-center gap-2 flex items-center">
            <TbCurrencyDollar />
            <span>{price}</span>
          </div>
          <div className=" text-center gap-2 flex items-center">
            <RiUserStarLine />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex space-x-2 items-center text-sm text-gray-400 dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <p>* customization:</p>
            <span>{customization}</span>
          </button>
          <FaGripLinesVertical />
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <p>* processingTime:</p>
            <span>{processingTime}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
