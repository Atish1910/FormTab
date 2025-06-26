import React from "react";

const Profile = ({ data, setData }) => {
  const { name, email, age } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <>
      <section>
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3>Profile</h3>
              <input
                value={name}
                type="text"
                className="form-control mb-3"
                placeholder="Enter Your Name"
                onChange={(e) => handleDataChange(e, "name")}
              />
              <input
                value={email}
                type="email"
                className="form-control mb-3"
                placeholder="Enter Your Email"
                onChange={(e) => handleDataChange(e, "email")}
              />
              <input
                value={age}
                type="number"
                className="form-control mb-3"
                placeholder="Enter Your Age"
                onChange={(e) => handleDataChange(e, "age")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
