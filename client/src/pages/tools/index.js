import React from "react";
import './styles.css';
import Tool from "./tool";
  
const Tools = () => {
  return (
    <div className="tools">
        <h1>TOOLS</h1>
        <div className="toolbox">
            <Tool
                title="Icelandic Gas Map"
                src="https://icelandic-gas-map.herokuapp.com"
                image="https://media.discordapp.net/attachments/953346950768496741/960377247536119838/unknown.png">
                [OLD PROJECT - MAY TAKE A WHILE TO LOAD]<br/>
                An interactive map that shows the price of petrol and Diesel in Iceland.</Tool>
            <Tool
                title="TG Profile Changer"
                src="https://github.com/tristanpn02/TG-Profile-Changer"
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftelegram%2Ftelegram_PNG35.png">
                Changes your Telegram user profile picture randomly every single day.<br/><br/>
                Requires Python3.x to run.
                </Tool>
            <Tool/>
            <Tool/>
            <Tool/>
            <Tool/>
            <Tool/>
            <Tool/>
        </div>
    </div>
  );
};
  
export default Tools;
