import  { useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import {useEffect} from "react";
import Spinner from "./Components/Spinner";

const App1 = () => {
    console.log(apiUrl)
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [category, setCategory] = useState(filterData[0].title);

    
    // components render hone ke bad use kr rha hu Useffect
    // api call krne ke liye
    // fetch function sara courses ka  data nikal ke deta h
    
    // async function fetchData() {

    //     // jb tk api call chl rhi h,
    //     // spinner ko dikhana chahte h
    //     //setLoading(true);
        
    //     try{

    //         let response = fetch(apiUrl);
    //         let output = await response.json();
    //         // output ->
    //         console.log(output)
    //         setCourses(output.data);
    //     }
    //     catch(error) {
           
    //     toast.error("Network error");
    //     }

    //     // jb data aa jae ga loding ko false kr dena h
    //     setLoading(false);
    // }

    // call the fetchData funtion
    useEffect( () => {
 
        async function fetchData() {

            // jb tk api call chl rhi h,
            // spinner ko dikhana chahte h
            //  setLoading(true);
            //  console.log("hi")
        
            try{
    
                let response = await fetch(apiUrl);
                let output = await response.json();
                // output ->
                // console.log(output.data)
               
                setCourses(output.data);
                setLoading(false);
                //console.log(output.data[0].title);
            }
            catch(error) {
               
                toast.error("Network error");
            }
    
            // jb data aa jae ga loding ko false kr dena h
            
        }

        fetchData();
    }, [])



    return (
        <div className = "min-h-screen flex flex-col bg-bgDark2">
            <div>
               <Navbar />
            </div>
            
            <div className="bg-bgDark2">
                
                <div>
                    {/* filter data ko pass kiya hu by using -> props */}
                    <Filter 
                    filterData={filterData} 
                    category = {category}
                    setCategory = {setCategory}/>
                </div>  

                <div className="w-11/12 max-w-[1200px]
                mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"> 
                    {
                        //  yaha pe ya phir card ko dikhae ge ya phir loading ko 
                        //  <Cards />  
                        // loading ho rhe h tb spinner, nhi ho rhe h tb card
                        loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)                 
                    }

                    {/* <Cards courses = {courses}/>  */}
                </div>
            </div>

        </div>
    );
};

export default App1; 