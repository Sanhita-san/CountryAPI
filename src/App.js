import React from "react";
import './App.css';

function App() {
  const [dataSet, setData] = React.useState([]);
  async function countryData(){
    const response = await fetch("https://restcountries.eu/rest/v2/region/asia?fields=name;capital;flag;region;subregion;population;borders;languages").then(res => res.json());
    const data = response;
    setData(data);
  }

  React.useEffect(()=> {
    countryData();
  },[]);

  return (
    <div className="App">
      <header><h1>List of countries in <br /> asia</h1></header>
      <main>
        {dataSet.map((data,index) => {
          return(
          <div key={index}>
            <p style={{fontWeight:"600"}}>Country : {data.name}<br /><em>(Capital : {data.capital})</em></p>
            <img alt="" src={data.flag} />
            <p>Region : {data.region}<br /><em>(Subregion : {data.subregion})</em></p>
            <p>Population : {data.population}</p>
            <p>Borders : 
            {data.borders.map((border,index) => <span key={index}> {border}</span>)}
            </p>
            <p>Languages : 
            {data.languages.map((language,index) => <span key={index}> {language.name}</span>)}
            </p>
          </div>
          )})}
      </main>
      
    </div>
  );
}

export default App;
