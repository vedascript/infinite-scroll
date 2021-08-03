import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=${25}`)
      .then((res) => {
        setLoading(true);
        setUsers((prev) => [...prev, ...res.data.results]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h2>Infinite Scroll</h2>
      <div>
        {users?.map((user, ind) => (
          <div key={ind}>{user.name.first}</div>
        ))}
      </div>
      {loading && "Loading........"}
    </div>
  );
}

export default App;
