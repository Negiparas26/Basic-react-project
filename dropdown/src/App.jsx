import  { useState } from 'react';

const countries = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
];

function App() {
  const [country, setCountry] = useState('....country....')
  const [city, setCity] = useState('...city...');
  const [cities, setCities] = useState([])

const handleCountryChange= (e)=>{

  const selectcountry=e.target.value;
  console.log(e.target.value)
  setCountry(selectcountry)
  setCities(countries.find( (item)=>item.value===selectcountry).cities)
   
}
function citychange (e){
console.log(e.target.value)
  setCity(e.target.value)
}
  return (
    <div>
      {
      
      <div>
        <select value={country} onChange={handleCountryChange}>
          <option >country</option>
          {countries.map((item) => (
            <option key={item.value} value={item.value}> {item.name}</option>
           

          ))}
        </select>
        <br />
        <select value={city} onChange={citychange}>
            <option >city</option>
            {cities.map(item => (
              <option key={item} value={item}> {item}</option>
             

            ))}
          </select>
          </div>
      
      
      
      
      
      
      }

      
    </div>
  );
}

export default App;
