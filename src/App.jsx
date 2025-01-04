import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const getList = async () => {
    const data = await axios.get("http://localhost:5001/api/users");
    setUserData(data.data.userData);
  };
  // console.log(userData);

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <div>
        <h1>User Table</h1>
        {/* <button onClick={handleClick}>Get users</button> */}
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {userData
              ? userData.map((user, index) => (
                  <tr key={index}>
                    <td scope="row">{user.user_id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              : "no data"}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
