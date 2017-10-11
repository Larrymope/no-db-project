import React, { Component } from 'react';



//make function component
function Images(props){

        return(
            <div className="flex-space" className="image-circ" >
          <img src={require('./images/empty-person-avatar.png')}/>
          <img src={require('./images/pistol-weapon.jpeg')}/>
          <img src={require('./images/treasure-chest.jpeg')}/>
          
          
        </div>
           
        )
    
}



export default Images

