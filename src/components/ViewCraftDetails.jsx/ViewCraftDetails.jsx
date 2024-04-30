import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewCraftDetails = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const itemName = e.target.itemName.value;
    const subCategoryName = e.target.subCategoryName.value;
    const shortDescription = e.target.shortDescription.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = e.target.stockStatus.value;
    const info = {
      photo,
      itemName,
      subCategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    fetch(`https://prctice-1.vercel.app/updateCraft/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex flex-col max-w-screen-xl-lg p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <h2 className="text-6xl hot font-semibold text-center">
        Your opinion matters!
      </h2>
      <span className="text-center text-2xl"> Update Now</span>
      <div className="flex space-y-3 mt-2 items-center justify-center flex-col w-full border-2 p-8">
        <form onSubmit={handleUpdate} className="space-y-6 w-1/2 ">
          <div className="col-span-2">
            <div className="form-control">
              <label>Photo URL:</label>
              <input
                className=" bg-slate-500 rounded"
                type="text"
                name="photo"
                placeholder="photo URL"
              />
            </div>
            <div className="form-control">
              <label>Item Name:</label>
              <input
                className=" bg-slate-500 rounded"
                type="text"
                name="itemName"
                placeholder="name"
              />
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <div>
              <label>Subcategory Name:</label>
              {/* <input type="text" name="subCategoryName" /> */}
              <select
                className=" bg-slate-500 rounded w-full"
                name="subCategoryName"
              >
                <option value="ClayMadePottery">Clay-made pottery</option>
                <option value="Stoneware">Stoneware</option>
                <option value="Porcelain">Porcelain</option>
                <option value="Ceramics&Architectural">
                  Ceramics & Architectural
                </option>
                <option value="Home decor pottery">Home decor pottery</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <label>Short Description :</label>
              <textarea
                className=" bg-slate-500 rounded w-full"
                name="shortDescription"
                placeholder="description"
              />
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-1">
              <label>Price:</label>
              <input
                className=" bg-slate-500 rounded w-full"
                type="text"
                name="price"
              />
            </div>
            <div className="flex items-center gap-1">
              <label>Rating:</label>
              <input
                className=" bg-slate-500 rounded w-full"
                type="text"
                name="rating"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <label>Customization:</label>
              <select
                className=" bg-slate-500 rounded w-full"
                name="customization"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label>Processing Time:</label>
              <input
                className=" bg-slate-500 rounded w-full"
                type="text"
                name="processingTime"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label>Stock Status:</label>
            <select className=" bg-slate-500 rounded w-full" name="stockStatus">
              <option value="inStock">In Stock</option>
              <option value="madeToOrder">Made to Order</option>
            </select>
          </div>
          <input
            type="submit"
            value="Update Now"
            className="col-span-2 btn flex flex-col w-full"
          />
        </form>
        <a
          rel="noopener noreferrer"
          href="/"
          className="text-sm text-gray-400 underline dark:text-gray-600"
        >
          Maybe later
        </a>
      </div>
    </div>
  );
};

export default ViewCraftDetails;
