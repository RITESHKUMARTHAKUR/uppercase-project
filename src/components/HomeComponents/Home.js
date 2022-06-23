import React  from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Texttransform from "../Texttransform/Texttransform";
// import { db } from "../../firebase"; 

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
        <Texttransform heading="Enter Your Text" />
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
