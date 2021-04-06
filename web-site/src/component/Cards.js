import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                        src='img-component/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='img-component/img-2.jpg'
                        text='Travel through the Islands of Bali in  a Private Cruise'
                        label='Luxury'
                        path='/services'
                    />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src='img-component/img-3.jpg'
                        text='Set Sail in the Atlantic Ocea visitiong Uncharted Waters'
                        label='Mystery'
                        path='/services'
                    />
                    <CardItem 
                        src='img-component/img-8.jpg'
                        text='Travel through the Islands of Baali in  a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='img-component/img-4.jpg'
                        text='Travel through the Islands of Baali in  a Private Cruise'
                        label='Adventure'
                        path='/services'
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
