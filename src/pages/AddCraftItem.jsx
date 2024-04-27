import Swal from "sweetalert2";
import useAuth from "../components/Hooks/UseAuth";

const AddCraftItem = () => {
  const { user, logOut } = useAuth() || {};
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const subCategoryName = form.subCategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const email = user.email;

    const newCraftItem = {
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
    };
    console.log(newCraftItem);

    // sending data->server
    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You Have Added The Craft Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-slate-500">
      <h2 className="text-blue-400">Add Craft Item</h2>
      <form
        onSubmit={handleAddCraft}
        className="p-20 border-2 grid md:grid-cols-1 lg:grid-cols-2 space-y-6"
      >
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
              <option
                value="Home decor pottery
"
              >
                Home decor pottery
              </option>
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
        <div className="col-span-2 flex justify-between">
          <div>
            <label>User Email:</label>
            <input type="email" name="userEmail" />
          </div>
          <div>
            <label>User Name:</label>
            <input type="text" name="userName" />
          </div>
        </div>
        <input
          type="submit"
          value="Add Art & Craft"
          className="col-span-2 btn btn-primary"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
