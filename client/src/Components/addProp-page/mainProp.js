import React,{useState, useEffect} from "react";
import StepContext from "./mainContext";
import AddProperty from "./addProperty";
import {useNavigate} from "react-router-dom";

const Property = ()=> {
  const authToken = localStorage.getItem("authorization");
     const [uData, setUData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
    fetch("https://server-10x-realestate.herokuapp.com/logout/done", { method: "GET", headers: { authorization: authToken } })

      .then((data) => {
        return data.json();

      }).catch((err)=>{
        navigate("/");
      })
    })
return(
    <div>
          <StepContext>
            <AddProperty/>
          </StepContext>
  </div>
)

}
export default Property;