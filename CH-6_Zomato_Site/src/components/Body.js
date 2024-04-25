import { useState,useEffect } from "react";
const Body = ()=>{

    const[resList,SetRestList] = useState([]);


    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async()=> {
        const data = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/pune");
        const json = await data.json();
        console.log(json);
    };

    return(
    <div className="body">
        <h1>Hello</h1>
    </div>
)};

export default Body;