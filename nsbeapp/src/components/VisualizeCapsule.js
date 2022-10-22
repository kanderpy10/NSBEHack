import React from "react";
export default function VisualizeCapsule(input){
    return(
        <div className="bigpapa">
            <h1>Visualize Capsule</h1>
            <button className="button button1" onClick={() => input.setPage('home')}>Go Back</button>
        </div>
    )
}