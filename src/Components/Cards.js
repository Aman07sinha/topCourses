import React from 'react'
import Card from './Card';
import {useState} from 'react'; 


const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    // returns you a list of all courses received from the api response

    // mujhe ek array ke under hi pura data chaiyea ---Business, Design, Development, lifestyle,
    // getCourses wala ye hume saare courses ka data ke single array me deta h

    function getCourses()  {
        if(category === "All") {
            let allCourses = [];


            // suppose key business h uske aandar value pde hue h
            // key se koi mtlb nhi mujhe sirf value chaiyea....eseliye Object.values
            // object.values ke upar loop chla diya...forEach kr ke
              Object.values(courses).forEach(courseCategory => {
    
                // single course ka data yaha pe mile ga
                courseCategory.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            console.log(allCourses)
            return allCourses;
        }
        else {
            // main sirf specific category ka data array krunga
            return courses[category];
        }

       
    }


    return (
        // <div>
        //       {!courses ? (
        //         <div>
        //             <p> No Data Found</p>
        //         </div>
        //     ):(getCourses().map( (course ) => { 
        //         return <Card key = {course.id} course = {course}/>
        //         }))}
        //          {/* all courses ka data liya and hr courses ke liye Card bna diye */}            
        // </div>s

        <div className = "flex flex-wrap justify-center gap-4 mb-4">
            (
                {getCourses().map( (course) => (
                  <Card key = {course.id} 
                  courses = {course}
                  likedCourses = {likedCourses}
                  setLikedCourses = {setLikedCourses}/>
                ))}
            )
        </div>       
    )
}

export default Cards;

