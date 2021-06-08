import React from 'react'
import Carditem from './Carditem'
import './Cards.scss';


function Cards() {
    return (
        <div className='cards'>
            <img src="./img-2/4-sv.png" className="head-svg" alt="" />
            {/* <h1>Our Product</h1> */}

            <div className="cards__container">
                <div className="cards__wrapper">

                    <ul className="cards__items">
                        <Carditem
                            src="img-2/5.jpg"
                            text=''
                            label='ZABAN'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/7.jpg"
                            text=''
                            label='Long Bameyeh'
                            path='/product'
                        />
                    </ul>

                    <ul className="cards__items">
                        <Carditem
                            src="img-2/30.jpg"
                            // src="videos/video-1.mp4"
                            text='persian cookie with Pectase '
                            label='pestei'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/9.jpg"
                            text=''
                            label='Bameyeh'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/12.jpg"
                            text=''
                            label='Karehi'
                            path='/product'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src="img-2/10.jpg"
                            // src="videos/video-1.mp4"
                            text=''
                            label='Papyon'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/11.jpg"
                            text=''
                            label='shokolati'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/13.jpg"
                            text=''
                            label='Tea & kareii'
                            // path='/product'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src="img-2/14.jpg"
                            // src="videos/video-1.mp4"
                            text=''
                            label='Narges'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/17.jpg"
                            text=''
                            label='Zafaroni'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/19.jpg"
                            text=''
                            label='Zaban Cream'
                            path='/product'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src="img-2/20.jpg"
                            // src="videos/video-1.mp4"
                            text=''
                            label='Danmarki'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/22.jpg"
                            text=''
                            label='Danmarki'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/23.jpg"
                            text=''
                            label='Layei'
                            path='/product'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src="img-2/24.jpg"
                            // src="videos/video-1.mp4"
                            text=''
                            label='Baghlava'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/25.jpg"
                            text=''
                            label='Baghlava sontati'
                            path='/product'
                        />
                        <Carditem
                            src="img-2/28.jpeg"
                            text=''
                            label='Asali'
                            path='/product'
                        />
                    </ul>

                </div>
                
            </div>
        </div>
    )
}

export default Cards;
