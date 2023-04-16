import React, {useEffect , useState} from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./assets/styles/style.css"

function App() {
  const [region , setRegion] = useState([]); 
  const [countries , setCountries] = useState([]);
  const [loading , setLoading] = useState(true);

 
  useEffect(() => {
    fetch("https:restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      setLoading(false)
    })
  },[])

  return (
    <>
      <header className="bg-primary d-flex justify-space-between align-items-center p-4 w-100 shadow position-sticky top-0 left-0">
        <div className=" container text-white fs-2">
          <h2>Countries</h2>
        </div>
      </header>
      <div className="mt-5 container d-flex justify-content-between align-items-center w-full flex-wrap">
      {
        countries.map((index, key) => (
          <div key={key} className="card p-3 shadow-sm col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="card__img">
            <img src={index.flags.png} alt={index.name.common} />
            </div>
            <div className="card-body d-flex flex-column py-4 mt-5">
              <h5 className="card-title font-weight-bold">{index.name.common}</h5>
              <span className="card-text">Capital : {index.capital}</span>
              <span className="card-text mt-2">Region : {index.region}</span>
              <span className="card-text mt-2">Population : {index.population}</span>
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
