import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>User Table</h1>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>---</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>---</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Arindam</td>
              <td>Das</td>
              <td>---</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
