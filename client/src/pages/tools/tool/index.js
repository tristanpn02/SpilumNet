import React from "react";
import './styles.css';
  
const Tool = (props) => {
  return (
    <a style={{"backgroundImage": `url(${props.image})`}} href={props.src} className="tool">
        <div className="tool-info"><span>{props.children}</span></div>
        <div className="tool-title"><span>{props.title}</span></div>
    </a>
  );
};
  
export default Tool;
