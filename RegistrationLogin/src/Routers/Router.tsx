import { Route, Routes } from "react-router-dom";
import Register from "../RegisterComponent/Register";
import Home from "../HomeComponent/Home.tsx";
import Login from "../LoginComponent/Login.tsx"


const Router: React.FC = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} /> 
        </Routes>
      </>
    );
  };
  
  export default Router;