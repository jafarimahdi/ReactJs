import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-1.jpg"
                            text='Explore the hidden waterfall deep inside tha Amazon jangle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text='Travel through to the Island of Bali in a Private Crouse'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            // src="videos/video-1.mp4"
                            text='Find peace in nature and free your soul'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text='Follow you favorite Team for the latest Match'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            text='Visit to Capitals of the most Truistic place in the world'
                            label='Touristic Area'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
