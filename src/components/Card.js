import React from 'react'
import CardItem from './CardItem'
import "./Card.css"
import img9 from "../assets/img-9.jpg"
import img2 from "../assets/img-2.jpg"
import img3 from "../assets/img-3.jpg"
import img4 from "../assets/img-4.jpg"
import img8 from "../assets/img-8.jpg"



function Card() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={img9}
                        text="Explore the hidden waterfall hidden inside the Amazon jungle"
                        label="Adventure"
                        path="/Services"
                        
                        
                        />
                         <CardItem
                        src={img2}
                        text="Travel through the island of Bali in Private Cruise"
                        label="Luxury"
                        path="/Services"
                        
                        
                        />

                    </ul>


                    <ul className="cards__items">
                        <CardItem
                        src={img3}
                        text="Set sail in the Atlantic Ocean visiting uncharted Ocean"
                        label="Mystery"
                        path="/Services"
                        
                        
                        />
                         <CardItem
                        src={img4}
                        text="Experience football on thetop of Himalay Mountain"
                        label="Adventure"
                        path="/Services"
                        
                        
                        />
                        <CardItem
                        src={img8}
                        text="Ruide on the Sahara desert on the guided Camel Tour "
                        label="Adrenalline"
                        path="/Services"
                        
                        
                        />

                    </ul>

                </div>


            </div>
            
        </div>
    )
}

export default Card
