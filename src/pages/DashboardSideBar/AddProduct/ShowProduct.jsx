// import React from 'react';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ShowProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_server}/getproduct`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this item?");
    
    if (proceed) {
      fetch(`${import.meta.env.VITE_server}/productDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setData((prevData) => prevData.filter((item) => item._id !== id));

            alert("Product deleted successfully");
          } else {
            alert("Failed to delete the product. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          alert("An error occurred while deleting the product. Please try again.");
        });
    }
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <section className="px-64">
          <div className="container mx-auto  sm:px-8">
            <div className="py-8">
              <div>
                <h2 className="text-2xl font-semibold leading-tight">
                  Show Products
                </h2>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          tittle
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          description
                        </th>
                        



                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          edit
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
                          delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr key={index}>
                          <td className="px-5 ">
                            {row.name}
                          </td>
                          <td>{row.title}</td>
                          <td>{row.description}</td>

                        

                          <td>
                            {" "}
                            <NavLink
                              to={`/dashboard/update/${row._id}`}
                              style={{
                                textDecoration: "none",
                                marginRight: "5px",
                              }}
                            >
                              <button
                                className="ms-5 bg-black text-white px-3 py-3 rounded-lg"
                                size="small"
                              >
                                Edit
                              </button>
                            </NavLink>
                          </td>
                          <td>
                            <button
                              className="ms-5 bg-black text-white px-3 py-3 rounded-lg"
                              size="small"
                              // sx={ButtonStyle}
                              onClick={() => handleDelete(row?._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShowProduct;
