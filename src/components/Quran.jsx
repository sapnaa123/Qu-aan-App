import axios from "axios"
import { useEffect,useState } from "react"
function Quran(){
    
    const[data,setData]=useState([])

    const getEndPoint=() => {
        axios.get("https://api.alquran.cloud/v1/surah").then((response)=>{
            setData(response.data.data)

        }).catch((error)=>{
            console.log(error)
        })

    }
    useEffect(()=>{
        getEndPoint()
    })
   
     return <div className="grid grid-cols-[200px_200px] sm:grid-cols-[300px_300px_300px_300px] justify-center pt-8">
   
    {
         data.map((quran)=>{
            return <div className="p-2 m-4 border-2 border-black">
                <h1>{quran.name}</h1>
                <h1>{quran.englishName}</h1>
                <h1>{quran.numberOfAyahs}</h1>
                <h1>{quran.revelationType}</h1>
                <h1>{quran.number}</h1>
            </div>
        
         })
    }
</div>
}
export default Quran