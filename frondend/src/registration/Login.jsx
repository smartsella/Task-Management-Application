import { useState } from "react";
import { users } from "./Register";

const Login = ({ setUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

        const user = users.find(
        u => u.email === email && u.password === password
        );

    if (!user) {
      alert("Invalid user");
      return;
    }

    setUser(user);
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
