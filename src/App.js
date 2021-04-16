import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour = (id) =>{
      const newTours = tours.filter((tour) => tour.id !== id);
      console.log("here i remove tour");
      setTours(newTours);
  }

  useEffect(()=>{
      fetch(url)
          .then((response) => {
              if(response.status >= 200 && response.status <= 299){
                  setLoading(false);
                  return response.json();
              }
          })
          .then((tours)=> {
              setTours(tours);
              setLoading(false);
          })
          .catch((error) => console.log(error))
  },[]) //dependency list always important so we will trigger the useEffect only when it changes

  if(loading){
    return (
        <main>
          <Loading/>
        </main>
    );
  }
  if(tours){

  }

  //default return
  return (
      <main>
          {/*we set props to tours so we can access it */}
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
  )
}

export default App
