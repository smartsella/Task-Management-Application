import { useState } from "react";
import Login from "./registration/Login";
import Register from "./registration/Register";
import TaskManager from "./components/TaskManage";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Management App</h1>

      {!user ? (
        <>
          <Register />
          <Login setUser={setUser} />
        </>
      ) : (
        <>
          <p>Welcome, {user.email}</p>
          <TaskManager />
        </>
      )}
    </div>
  );
};

export default App;
