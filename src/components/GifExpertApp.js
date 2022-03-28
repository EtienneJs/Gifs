import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () =>{

    const [categories, setcategories] = useState([''])
  
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setcategories}/>
        <hr />
       
        <ol>
            { 
            categories.map(category => <GifGrid 
                key={category} 
                category={category}/>
            )
            }
        </ol>
        </>
    )
}

export default GifExpertApp