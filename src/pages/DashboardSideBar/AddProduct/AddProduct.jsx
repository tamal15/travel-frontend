import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_server}/postProduct`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Product added successfully",
            confirmButtonColor: "#7E2231",
          });
          reset();
        }
      });
  };

  return (
    <div className="py-12 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-[#7E2231] rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Add Your Products
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7E2231] focus:outline-none font-semibold text-gray-700"
              {...register("name", { required: true })}
              placeholder="Product Name"
              style={{ fontWeight: "600", color: "#0E1621" }}
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7E2231] focus:outline-none font-semibold text-gray-700"
              {...register("title", { required: true })}
              placeholder="Product Title"
              style={{ fontWeight: "600", color: "#0E1621" }}
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7E2231] focus:outline-none font-semibold text-gray-700"
              {...register("description", { required: true })}
              placeholder="Product Description"
              style={{ fontWeight: "600", color: "#0E1621" }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-[#7E2231] font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
