import React, {useEffect , useState} from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {

  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    fetch("https:restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(false)
    })
    console.log(data);
  }, [])
  
  return (
    <>
      <header className="bg-primary p-4 w-100 shadow position-sticky top-0 left-0">
        <div className=" container text-white fs-2">Hello</div>
      </header>
      <div className="mt-5 container">
      <div className="card">
        <img className="card-img-top" src=""></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>

      {
        loading && (<LoadingScreen/>)
      }
    </>
  );
}

export default App;
