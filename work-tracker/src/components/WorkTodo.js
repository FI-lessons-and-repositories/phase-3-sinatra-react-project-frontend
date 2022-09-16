import React, {useState} from 'react'

function NewWork({onHandleAddPost, setIsFilledIn}){
    const [setAuthor]=useState('')
    const [setWork]=useState('')
    const [setCategory]=useState('')
    function handleSubmit(e){
         e.preventDefault()
        e.target.reset();
        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({

              }),
        })
        .then((resp) => resp.json())
        .then((newWork) => onHandleAddPost(newWork) )
        alert("New Work added successfully!");
    }
    return (
        <div className="posts" style={{margin:"auto", width:'60%', height: 100+"vh", color:"black"}}>
            <h1 style={{textAlign:"center", marginTop: 50 +"px"}}>Add New reviews</h1>
            <form className="new-post" onSubmit={handleSubmit}>
            <div className="new-post">
                    <label >image_url: </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="image"  onChange={(e)=>setAuthor(e.target.value)} required/>
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">slug:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="slug"  onChange={(e)=>setWork(e.target.value)} required/>
                </div>
                <div className="new-post">
                    <label  for="exampleFormControlTextarea1" class="form-label">description: </label>
                    <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>setCategory(e.target.value)} required/>
                </div>
               <button type="submit">Submit New Post</button>
            </form>
        </div>
    )
}

export default WorkTodo;
