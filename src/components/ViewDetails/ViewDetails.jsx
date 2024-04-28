import { Link, useLoaderData, useParams } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";
const ViewDetails = () => {
  const itemDetails = useLoaderData();
  const { _id } = useParams();
  const itemData = itemDetails.find((data) => data._id == _id);
  console.log(itemData, itemDetails, _id);
  const {
    photo,
    itemName,
    subCategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = itemData;
  return (
    <>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={photo}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 hot m-4 mx-auto text-center -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-7xl font-semibold sm:text-7xl"
              >
                {itemName}
              </a>
              <p className="text-xl text-gray-400 dark:text-gray-600">
                Category :
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xl ml-2 hover:underline"
                >
                  {subCategoryName}
                </a>
              </p>
            </div>
            <div className="text-gray-100 dark:text-gray-800">
              <p>{shortDescription}...</p>
            </div>
            <div className="btm-nav">
              <Link to="/" className="bg-gray-500 text-black-600">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </button>
                <span className="btm-nav-label">Home</span>
              </Link>
              <Link
                to={`/crafts/${itemData._id}`}
                className="bg-white-200 text-teal-600"
              >
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </button>
                <span className="btm-nav-label">Update Card</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Price</h4>
                  <span className="text-6xl font-bold flex gap-2">
                    <span>$</span> {price}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Best price | Art & Craft
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>

                    <span>Rating :</span>

                    <span className="flex items-center gap-2 ">
                      <span>{rating}</span>
                      <LiaStarSolid></LiaStarSolid>
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span></span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span></span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50"
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* <ul className="flex flex-col pt-4 space-y-2">
              <li className="flex items-start justify-between">
                <h3>Price</h3>
                <div className="text-right">
                  <span className="block">$ {price}</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <h3>
                  <span className="text-sm dark:text-violet-600">Rating</span>
                </h3>
                <div className="text-right">
                  <span className="flex items-center gap-2">
                    <LiaStarSolid /> {rating}
                  </span>
                </div>
              </li>
            </ul> */}
            <div className=" border-2 p-4 shadow-lg rounded col-span-2 ">
              <div className="border-2 flex overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-center px-4 bg-violet-600 text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                    <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-2xl font-semibold">Customization</p>
                  <p>{customization}</p>
                </div>
              </div>

              <div className="flex border-2 mt-2 overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
                <div className="flex  items-center justify-center px-4 bg-violet-600 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                    <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
                  </svg>
                </div>
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-2xl font-semibold">Processing Time</p>
                  <p>{processingTime}</p>
                </div>
              </div>
              <div className="border-2 flex mt-2 overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-center px-4 bg-violet-600 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                    <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                    <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-2xl font-semibold">Stock Status Now</p>
                  <p>{stockStatus}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
