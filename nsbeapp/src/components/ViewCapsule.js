import React from "react";
import earth from './earth.png'
import flower from './flower.png'
import protest from './protest.png'
import protest2 from './protest2.png'
import alien from './alien.txt'

export default function ViewCapsule(input){
    let [inSearch, setSearch] = React.useState(false);

    function search(){
        setSearch(true)
    }

    function getdata(input){
        switch(input){
            case("alien"):
                return (
                <div className="mainbox">
                    <div className="box">
                        <p>
                            This is a message from an alien, fellow humans
                        </p>
                    </div>
                </div>
                )
            case ("earth"):
                return (
                <div className="mainbox">
                    <div className="box">
                        <p>Earth From Above</p>
                        <img className="photo" src={earth} alt="earth"/>
                    </div>
                </div>
                )
            case ("flower"):
                return (
                <div className="mainbox">
                    <div className="box">
                        <p>Flower</p>
                        <img className="photo" src={flower} alt="flower"/>                    
                    </div>
                </div>
                )
            case ("protest"):
                return (
                    <div className="mainbox">
                        <div className="box">
                            <p>France Inflation Protest</p>
                            <img className="photo" src={protest} alt="protest"/>
                        </div>
                        <div className="box">
                            <p>Stop Oil Protest</p>
                            <img className="photo" src={protest2} alt="protest2"/>
                        </div>
                    </div>
                    )
            default:
                return (<p>Nothing found for querry</p>)
        }
    }

    if(inSearch){
        
        let date = document.getElementById("date").value;
        let name = document.getElementById("name").value;
        let state = document.getElementById("state").value; 
        let city = document.getElementById("city").value; 
        let time = document.getElementById("time").value; 
        
        return(
            
            <div className="viewcap">
                {console.log("date" + date)}
                {console.log("name" + name)}
                {console.log("state" + state)}
                {console.log("city" + city)}
                {console.log("time" + time)}
                <h1>Result</h1>
                <div className="bigapple">
                    {
                        getdata(name)
                    }
                </div>
                <br/> <br />
                <button className="button button1" onClick={() => setSearch(false)}>New Search</button>
                <button className="button button1" onClick={() => input.setPage('home')}>Go Back</button>
            </div>
        )
    }
    else{
        return(
            <div className="viewcap" >
                <h1>Enter Capsule</h1>
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