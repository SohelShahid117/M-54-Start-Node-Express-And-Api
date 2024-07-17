/*
1.create a post API on server site
2.send data from client side via post method
3.set--->
 fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log("inside post response", data));
  };
  4.on the server site add --> app.use(express.json()) --> as a middleware

*/ 