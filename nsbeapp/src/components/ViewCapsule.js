import React from "react";

export default function ViewCapsule(input){
    let [inSearch, setSearch] = React.useState(false);

    function search(){
        setSearch(true)
    }

    if(inSearch){
        return(
            <div>
                <div> display it here </div>
                <br/>
                <button className="button button1" onClick={() => setSearch(false)}>New Search</button>
                <button className="button button1" onClick={() => input.setPage('home')}>Go Back</button>
            </div>
        )
    }
    else{
        return(
            <div>
                
                Enter Date: <input type={'date'} id="date"></input>
                <br/>
                Enter Name: <input type={'form'} id="name"></input>
                <br/>
                Enter State: <input type={'form'} id="state"></input>
                <br/>
                Enter City: <input type={'form'} id="city"></input>
                <br/>
                Enter Time: <input type={'time'} id="time"></input>
                <br/>
                <button className="button button1" onClick={() => search()}>Search</button>
                <button className="button button1" onClick={() => input.setPage('home')}>Go Back</button>
            </div>
        )
    }
}