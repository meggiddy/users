import Swal from "sweetalert2";
import { useUserContext } from "../UserContext";

function Button() {
  const { role, setRole  } = useUserContext();

  const fetchUser = () => {
    fetch("http://localhost:4000/user")
      .then((response) => response.json())
      .then((data) => {
        if (data.role) {
          Swal.fire(`Fetched user role: ${data.role}`);
          setRole(data.role);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("There was an error fetching the user role:", error);
      });
  };

  return (
    <div className="mt-20">
      <p className="p-6">Assigned role is {role}</p>
      <button className="bg-slate-300 p-3 rounded-md" onClick={fetchUser}>
        Fetch User
      </button>
    </div>
  );
}

export default Button;
