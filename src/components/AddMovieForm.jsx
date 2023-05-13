import { useState } from "react";
import isURL from "validator/lib/isURL";

export const AddMovie=(props)=>{
    const [title, setTitle]=useState("")
    const [imgURL, setimgURL]=useState("")
    const [description, setDescription]=useState("")
    const [imdbLink, setImbdLink]=useState("")
    
    
    const clearAllFields=()=>{
        setDescription("")
        setImbdLink("")
        setTitle("")
        setimgURL("")
    }

    const validData =()=>{
        if (!title){ 
            alert("enter title first")
            return false;}
        if (!(isURL(imgURL))) {
            alert("URL not valid")
            return  false};
        if (!(isURL(imdbLink))){
            alert("URL not valid")
            return false;
        } 
        return true;
    }
    return (
        <div className="flex flex-col gap-3 items-center w-1/3 my-4">
            <h1 className="font-semibold text-gray-500 text-4xl">Create Movie</h1>
            <input
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             className="p-2 border rounded border-gray-500 w-3/4" placeholder="Movie Tittle"></input>
            <input
             value={imgURL}
             onChange={(e)=> setimgURL(e.target.value)}
             className="p-2 border rounded border-gray-500 w-3/4" placeholder="Image URL"></input>
            <textarea
             value={description} onChange={(e)=>setDescription(e.target.value)} 
             rows={3} className="p-2 border rounded border-gray-500 w-3/4" placeholder="Description"></textarea>
            <input
             value={imdbLink} onChange={(e)=>setImbdLink(e.target.value)}
             className="p-2 border rounded border-gray-500 w-3/4" placeholder="IMDB Link"></input>
            <button
             onClick={()=>{
                if (!validData()){
                
                    return;
                }
                props.setMovies((prev)=>[{title, imgURL, description, imdbLink}, ...prev]);
                clearAllFields()
             }}
             className="text-small p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Create</button>
        </div>
    )
}