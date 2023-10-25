import { useState } from "react";
import Swal from "sweetalert2";

function Button() {
  //on button click
  //fetch user
  //if user- fetch role and check role on step
  //if new user select role and store user
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const fetchUser = () => {
    fetch("http://localhost:4000/user")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.role) {
          Swal.fire(`Fetched user role: ${data.role}`);
          // Update your frontend state here with the fetched role
        }
      })
      .catch((error) =>
     { console.log(error)
        Swal.fire("There was an error fetching the user role:", error)}
      );
  };

  const storeRole = async (newRole) => {
    try {
      const response = await fetch("http://localhost:4000/set-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.status === 200) {
        setRole(newRole);
      }
    } catch (error) {
      console.error("There was an error storing the role", error);
    }
  };

  return (
    <div className="mt-20">
      <button className="bg-slate-300 p-3 rounded-md" onClick={fetchUser}>
        Fetch User
      </button>
    </div>
  );
}

export default Button;
