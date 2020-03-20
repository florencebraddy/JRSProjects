function newUser() {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        firstname: "Shawn",
        lastname: "Braddy",
        username: "ShawnBraddy",
        password: "mypassword",
        emailaddress: "shawnbgmailcouk"
      }) // body data type must match "Content-Type" header
    });
    console.log(await response.json()); // parses JSON response into native JavaScript objects
  }