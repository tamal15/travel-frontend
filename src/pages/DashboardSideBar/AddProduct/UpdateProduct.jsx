import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_server}/editproduct/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_server}/productupdate/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: product.name,
          title: product.title,
          description: product.description,
        }),
      });
      const data = await response.json();

      if (response.ok && data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product updated successfully",
          confirmButtonColor: "#7E2231",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to update the product. Please try again.",
          confirmButtonColor: "#7E2231",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while updating the product. Please try again.",
        confirmButtonColor: "#7E2231",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#7E2231] p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Update Product
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <input
              onChange={handleChange}
              value={product.name || ""}
              name="name"
              className="w-full px-4 py-3 border border-[#113350] hover:border-[#113350] rounded-lg focus:ring-2 focus:ring-[#113350] font-semibold text-gray-700 focus:outline-none"
              placeholder="Product Name"
              required
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              value={product.title || ""}
              name="title"
              className="w-full px-4 py-3 border border-[#113350] hover:border-[#113350] rounded-lg focus:ring-2 focus:ring-[#113350] font-semibold text-gray-700 focus:outline-none"
              placeholder="Product Title"
              required
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              value={product.description || ""}
              name="description"
              className="w-full px-4 py-3 border border-[#113350] hover:border-[#113350] rounded-lg focus:ring-2 focus:ring-[#113350] font-semibold text-gray-700 focus:outline-none"
              placeholder="Product Description"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[white] text-[#7E2231] font-bold rounded-lg shadow-lg hover:bg-[#113350] transition duration-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
