import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Texttransform from "./components/Texttransform/Texttransform";
// import { db } from "./firebase"; 

function App() {
  // const [Names ,setNames ] = useState([]);

  // useEffect (()=> {
  //   db.collection("added values")
  //   .get()
  //   .then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc)=> doc.data());
  //     setNames(data);
  //   });
  // }, []);

  // let counter = 0 ;
  return (
    <>
      <Navbar title="textTransform " home="Home" />
      <div className="container">
        <Texttransform heading="Enter Text" />
        <div className="data">
          {/* {Names?.map((data,i) =>{
            counter++;
            return(
              <ul>
                <li>{data.name}</li>
              </ul>
            );
          })} */}
        </div>
        {/* {counter === 0 ? <h3>Sorry No data !! </h3> : null } */}
      </div>
    </>
  );
}

export default App;
