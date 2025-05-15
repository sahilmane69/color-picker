import React, { useState } from "react";

const ColorPicker = () => {
     const [color, setColor] = useState("#000000");

     const handleChange = (event) => {
          setColor(event.target.value);
     };

     return (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
               <input
                    type="color"
                    value={color}
                    onChange={handleChange}
                    style={{ cursor: "pointer" }}
               />
               <h2 style={{ color: color }}>Selected Color: {color}</h2>
               <div
                    style={{
                         width: "100px",
                         height: "100px",
                         borderRadius: "50%",
                         backgroundColor: color,
                         margin: "20px auto",
                         border: "1px solid #000",
                    }}
               ></div>
          </div>
     );
};

export default ColorPicker;