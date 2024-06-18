import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import {Typography} from '@mui/material'
import {toast} from 'react-toastify';
const Card = (props) => {
    let course = props.courses;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        // logic

        if(likedCourses.includes(course.id)) {
            // phle se like hua pda tha
            // like se hatana h, it means remove krna h 
            // cid means course ki id

            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) ) );
            toast.warning("like removed");
        }

        else{
            // phle se like nhi h course
            // insert krna h ye course liked course me

            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else{
                // non-empty phle se
                // ...prev -> old state + course.id 
                setLikedCourses( (prev) => [...prev, course.id]);
            }

            toast.success("Liked Successfully");
        }
    }
    console.log(course)
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

            <div className='relative'>
                <img src= {course.image.url} alt='' />

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom[-9px]
                grid place-items-center'>
                    <button onClick = {clickHandler}>
                        {
                            // liked course ke under me aae ga sb 

                            likedCourses.includes(course.id) ?
                            (<FcLike fontSize = "1.75" />) 
                            : (<FcLikePlaceholder fontSize = "1.75rem"/>)
                        }  
                    </button>
                </div>           
            </div>
        
            
            <div className='p-4'>
                <Typography className="text-white font-semibold text-lg loading-6">{course.title}</Typography> 
                <Typography className="mt-2 text-white">
                    {
                        course.description.length > 100 ?
                        (course.description.substr(0,100)) + "...":
                        (course.description)
                    }
                </Typography> 

                {/* <p>course.title</p> 
                <p>course.description</p> */}
            </div>
        </div>

    // <div>
    //     {course && course.image && course.image.url && (
    //     <img src={course.image.url} alt='Course Image' />
    //     )}
    
    //     {course && course.title && (
    //     <h2>{course.title}</h2>
    //     )}
  
    // </div>
  
   )
}

export default Card