import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs";

export const useFetchGifs =( category )=>{
    const [state, setstate] = useState({
        data: [],
        loading:true
    });
    useEffect(()=>{
        getGift( category ).then(img =>{
            setTimeout(()=>{
                setstate({
                    data:img,
                    loading:false
                })
            },1000)
        })
    },[category])
   
    return state;
}