import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Profile() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users/1")
      .then((response) => {
        setUser(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="products flex justify-center mt-10">
          <Skeleton width={300} height={360} />
        </div>
      ) : (
        <div className="products flex justify-center mt-10">
          <div className="w-[300px] h-auto border-2 p-8 rounded-md shadow-lg">
            <div className="ProfileImage flex justify-center">
              <div className="w-24 h-24 rounded-full border shadow-lg border-black overflow-hidden">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="username text-center font-bold text-xl capitalize">
              {user.name.firstname} {user.name.lastname}
            </div>
            <div className="username text-center text-base font-semibold pt-4">
              Username : <span className="text-green-600">{user.username}</span>
            </div>
            <div className="username text-center text-base font-semibold pt-4">
              Address :{" "}
              <span className="text-green-600  capitalize">
                {user.address.city},{user.address.street},{user.address.number}
                <br /> ZipCode : {user.address.zipcode}
              </span>
            </div>
            <div className="username text-center text-base font-semibold pt-4">
              Mobile :{" "}
              <span className="text-green-600  capitalize">{user.phone}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
