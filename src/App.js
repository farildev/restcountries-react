import React, {useEffect , useState} from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./assets/styles/style.css"

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
  },)
  
  return (
    <>
      <header className="bg-primary p-4 w-100 shadow position-sticky top-0 left-0">
        <div className=" container text-white fs-2">Hello</div>
      </header>
      <div className="mt-5 container d-flex justify-content-between align-items-center flex-wrap">
      {
        data.map((index, key) => (
          <div key={key} className="card w-25 p-4">
            <img src={index.flags.svg} alt={index.name.common} />
            <div className="card-body d-flex flex-column py-4">
              <h5 className="card-title">{index.name.common}</h5>
              <span className="card-text">{index.capital}</span>
              <span className="card-text mt-3">{index.region}</span>
              <span className="card-text mt-3"></span>
            </div>
          </div>
        ))
      }
      </div>

      {
        loading && (<LoadingScreen/>)
      }
    </>
  );
}

export default App;
