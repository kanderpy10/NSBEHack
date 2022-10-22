import React from "react";

function submit(){
    // console.log(document.getElementById("Name").value)
    alert("Posted")
}

export default function AddToCapsule(input){
    return(
        <div className="capsuleheader">
            <h1>Add to capsule</h1>
            {/* <br/> */}
            Name (optional): <input id="Name"></input>
            <br/>
            Country (optional): <input id="Country"></input>
            <br/>
            City (optional): <input id="City"></input>
            <br/>
            Image, file, etc.: <input type={'file'} id='Content'></input>
            <br/>
            <button className="button button1" onClick={() => submit()}>Submit</button>
            <button className="button button1" onClick={() => input.setPage('home')}>Go Back</button>
        </div>
    )
}