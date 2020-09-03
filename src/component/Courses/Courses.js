import React from 'react';

import  './Courses.css';

const Courses = (props) => {
  const handleAddCourses = props.handleAddCourses; 
   
    return (
        <div className="product">
            <div>
            
            </div>
            <div>
                <h4 className="product-name">{props.course.name}</h4>
                <br/>
               
                 <p>${props.course.price}</p>
                
                <button 
                className="main-button"
                onClick={() => handleAddCourses(props.course)}

                >Enroll Now</button>
            </div>
           
           
        </div>
    );
};

export default Courses;