import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import NameCard from './components/NameCard'
import Loader from './components/Loader'
import Axios from 'axios';


function App() {
  const [isClicked, setIsClicked] = useState(0); 
  const [data, setData] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  

  // Api being called
  const getUsers = () => {
    //showing loader when data is being fetched
    setIsLoader(true)

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("api data recieved")
        setData(response.data.data);

        // hide loader when data is fetched
        setIsLoader(false)
      }
    )
  }
  
  // Button in navbar
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])

  return (
    <div className="App">
      <Navbar onSetIsClicked={setIsClicked}/>
      <div className='row'>
       
        {data&&data.map((val) => {
          return <NameCard first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar}/>
          
        })}
      </div>
      <Loader show={isLoader}/>
    </div>
  );
}

export default App;