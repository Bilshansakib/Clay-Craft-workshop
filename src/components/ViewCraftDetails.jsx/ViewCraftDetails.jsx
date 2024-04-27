import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    const price = e.target.price.value;
    const info = { price };
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
      });
  };

  return (
    <form onSubmit={handleUpdate}>
      <div>
        <label>Price:</label>
        <input type="text" name="price" />
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
