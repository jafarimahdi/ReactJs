import React from 'react'
import CardItem from './CardItem'
import './Cards.scss';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div className='cards'>
            <img src="./img-2/4-sv.png" className="headSvg" alt="" />
            <h1>Our Product</h1>

            <div className="cards__container">
                <div className="cards__wrapper">

                    <ul className="cards__items">
                        <CardItem
                            src="img-2/5.jpg"
                            text='Explore the hidden waterfall deep inside tha Amazon jangle'
                            label='ZABAN'
                            path='/product'
                        />
                        <CardItem
                            src="img-2/7.jpg"
                            text='Travel through to the Island of Bali in a Private Crouse'
                            label='Adventure'
                            path='/product'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="img-2/8.jpg"
                            // src="videos/video-1.mp4"
                            text='Find peace in nature and free your soul'
                            label='Adventure'
                            path='/product'
                        />
                        <CardItem
                            src="img-2/9.jpg"
                            text='Follow you favorite Team for the latest Match'
                            label='Adventure'
                            path='/product'
                        />
                        <CardItem
                            src="img-2/12.jpg"
                            text='Visit to Capitals of the most Truistic place in the world'
                            label='Touristic Area'
                            path='/product'
                        />
                    </ul>

                </div>
                <Link to="/product" className="button-more">
                <button>More</button>
                </Link>
            </div>
        </div>
    )
}

export default Cards
