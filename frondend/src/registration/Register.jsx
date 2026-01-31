import React, { useState } from "react";

const users = [];

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

            const exists = users.find(u => u.email === email);
            if (exists) {
            alert("User already register");
            return;
            }

    users.push({ email, password });
    alert("Registration successful");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export { users };
export default Register;
