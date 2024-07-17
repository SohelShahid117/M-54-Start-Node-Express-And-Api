import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log("add user is working");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, name, email, password);
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
        let newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>Users Management System</h1>
      <h2>All users here : {users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" />
        <br /> <br />
        <input type="email" name="email" placeholder="email" />
        <br /> <br />
        <input type="password" name="password" placeholder="password" />
        <br /> <br />
        <input type="submit" value="Add User" />
      </form>
      {users.map((user) => (
        <p key={user.id}>
          {user.id}
          <span>.</span>
          <span>Name:{user.name},</span>
          <span>Email:{user.email}</span>
        </p>
      ))}
    </>
  );
}

export default App;
