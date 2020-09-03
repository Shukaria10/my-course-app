import React, { useEffect } from 'react';

import './App.css';
import data from './data/data.json';
import { useState } from 'react';
import Header from './component/Header/Header';
import Courses from './component/Courses/Courses';
import Cart from './component/Cart/Cart';




function App() {
  const [courses,setCourses] = useState([]);
  const [cart,setCart] = useState([]);

  const handleAddCourses = (course) =>{
    const newCart = [...cart,course];
    setCart(newCart);
  }
  
  useEffect(() =>{
    
    setCourses(data);

  },[])
  return (
    <div  className="App">
        <Header></Header>
 
        <ul>
          {
            courses.map(course =><Courses course={course} handleAddCourses={handleAddCourses} key={course.id}></Courses>)
          }
        </ul>
        <h4>Total Courses: {courses.length}</h4>
        <h5>Courses Added: {cart.length}</h5>
        <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;
