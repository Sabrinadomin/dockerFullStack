import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)

  // const url = "/a";

  useEffect(() => {
    fetch('http://localhost:4000/api')
  .then(response => response.json())
  .then(data => {
    setData(data.data)
    setLoading(false)
  });
  }, []);

  return (
    <div className="App">
      <h1>{loading ? "loading..." : data}</h1>
    </div>
  );
}

export default App;