
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setImage] = useState("")
  const [result, setResult] = useState([])

  const searchImage = () => {
     axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=KNvQq5x_vBnv9XuqHCzRZ7nvSajnL-dGqUBkI2yuUDs`)
     .then((response)=>{
      console.log(response.data)
      setResult(response.data.results);
     })
  }
  return (
    <div className="App">
    <div className='container'>
        <h1>React Photo Search</h1>
        <h4 type='text' value={image} onClick={(image)} className='h4'>Bookmark</h4>
        <input type="text" placeholder='Search from high resolution images' className='search' value={image} onChange={(e) => {
             setImage(e.target.value)
        }}  />
        <button type='submit' className='search-btn' onClick={searchImage}>Search</button>
       </div>
       <div className='image-gallery'>
        <div className='row'>
            {result.map((value) => {
              return (
                <div className=' row-3 col-3'>
                  <img className='img' src={value.urls.small} alt='img' />
                </div>
              )
            })}
        </div>
       </div>
    </div>
  );
}

export default App;
