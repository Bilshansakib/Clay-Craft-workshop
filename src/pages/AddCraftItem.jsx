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
            <select name="customization">
              <option value="1.0">1.0</option>
              <option value="1.5">1.5</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
              <option value="3.0">3.0</option>
              <option value="3.5">3.5</option>
              <option value="4.0">4.0</option>
              <option value="4.5">4.5</option>
              <option value="5.0">5.0</option>
            </select>
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
            <select name="customization">
              <option value="1-2 business days">1-2 business days</option>
              <option value="3-5 business days">3-5 business days</option>
            </select>
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
            <select name="email">
              <option value={user.email}>{user.email}</option>
            </select>
          </div>
          <div>
            <label>User Name: </label>
            <select name="user name">
              <option value={user.displayName}>{user.displayName}</option>
            </select>
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
