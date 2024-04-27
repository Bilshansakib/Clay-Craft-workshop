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
    fetch(`http://localhost:5000/updateCraft/${id}`, {
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
    <form onSubmit={handleUpdate}>
      <div className="col-span-2">
        <div className="form-control ">
          <label>Photo URL:</label>
          <input type="text" name="photo" placeholder="photo URL" />
        </div>
        <div className="form-control">
          <label>Item Name:</label>
          <input type="text" name="itemName" />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <label>Subcategory Name:</label>
          {/* <input type="text" name="subCategoryName" /> */}
          <select name="subCategoryName">
            <option value="ClayMadePottery">Clay-made pottery</option>
            <option value="Stoneware">Stoneware</option>
            <option value="Porcelain">Porcelain</option>
            <option value="Ceramics&Architectural">
              Ceramics & Architectural
            </option>
            <option value="Home decor pottery">Home decor pottery</option>
          </select>
        </div>
        <div>
          <label>Short Description:</label>
          <textarea name="shortDescription" />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <label>Price:</label>
          <input type="text" name="price" />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" name="rating" />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <label>Customization:</label>
          <select name="customization">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label>Processing Time:</label>
          <input type="text" name="processingTime" />
        </div>
      </div>
      <div className="col-span-2">
        <label>Stock Status:</label>
        <select name="stockStatus">
          <option value="inStock">In Stock</option>
          <option value="madeToOrder">Made to Order</option>
        </select>
      </div>
      <input
        type="submit"
        value="update"
        className="col-span-2 btn btn-primary"
      />
    </form>
  );
};

export default ViewCraftDetails;
