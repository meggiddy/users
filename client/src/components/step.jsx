import { useState } from "react";

function StepBar() {
  const [selected, setSelected] = useState(null);

  const handleClick = (role) => {
    setSelected(role);
  };

  const getIcon = (role) => {
    if (selected === role) {
      return "fa-check fa-2x";
    }
    if (role === "no role") {
      return "fa-ban fa-2x";
    }
    if (role === "user") {
      return "fa-user fa-2x";
    }
    if (role === "moderator") {
      return "fa-users fa-2x";
    }
    if (role === "admin") {
      return "fa-user-secret fa-2x";
    }
  };

  return (
    <div className="flex flex-row gap-20 ml-4 text-lg mt-20">
      <div className="flex flex-col ml-10" onClick={() => handleClick("no role")}>
        <i
          className={`fa ${getIcon("no role")}`}
          style={{ color: "green" }}
          aria-hidden="true"
        ></i>{" "}
        No Role
      </div>
      <div className="flex flex-col" onClick={() => handleClick("user")}>
        <i
          className={`fa ${getIcon("user")}`}
          style={{ color: "green" }}
          aria-hidden="true"
        ></i>{" "}
        User
      </div>
      <div className="flex flex-col" onClick={() => handleClick("moderator")}>
        <i
          className={`fa ${getIcon("moderator")}`}
          style={{ color: "green" }}
          aria-hidden="true"
        ></i>{" "}
        Moderator
      </div>
      <div className="flex flex-col" onClick={() => handleClick("admin")}>
        <i
          className={`fa ${getIcon("admin")}`}
          style={{ color: "green" }}
          aria-hidden="true"
        ></i>{" "}
        Admin
      </div>
    </div>
  );
}

export default StepBar;
