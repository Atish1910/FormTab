import React, { useState } from "react";
import Profile from "./Profile";
import Intrests from "./Intrests";
import Settings from "./Settings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Atish",
    age: 26,
    email: "atishk@gmail.com",
    intrest: ["coading", "cricket", "gym"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "profile",
      component: Profile,
    },
    {
      name: "intrests",
      component: Intrests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <>
      <section className="py-5 border">
        <div className="container">
          <div className="row text-center">
            <h4>Tab Form Component</h4>
          </div>
          {/* Navbar  */}
          <div className="row  border">
            {tabs.map((t, index) => {
              return (
                <div className="col-4 border text-center">
                  <p
                    className="mb-0 navtab"
                    key={index}
                    onClick={() => setActiveTab(index)}
                  >
                    {t.name}
                  </p>
                </div>
              );
            })}
          </div>
          {/* components Body */}
          <div className="row border vh-100 border-success ">
            <ActiveTabComponent
              data={data}
              setData={setData}
            ></ActiveTabComponent>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabForm;
