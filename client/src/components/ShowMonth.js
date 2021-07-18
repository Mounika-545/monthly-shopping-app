import React from "react";
import "./Style.css";

var Month = () => {
    const currentMonth = new Date();
    const month = currentMonth.toLocaleString('default', { month: 'long' });
    return (
        <div className="mt-5">
            <center>
                <h2> Plan for Month of {month}</h2>
            </center>
        </div>
    )
};

export default Month;