import './ProductArticle.scss';
import axios from 'axios';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function ProductArticle(props) {

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min).toLocaleString();
    const getRandom2 = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

    const [withs, setWiths] = useState([]);

    const getWiths = async () => {
        try {
            const response = await axios.get(`$http://10.150.150.191:8080/`, {

            });

            setWiths([...response.data]);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Link to={`/product/${props.id}`}>
            <div className='oneproduct'>
                <div className='oneproduct-in'>   
                    <article>
                        <div className='productarticle-img'>
                            <div className='productarticle-img-day'>
                                <span>{getRandom(1,7)}일 남음</span>
                            </div>
                            <div className='productarticle-img-img'>
                                <img src={props.mainImage.imageUri} />
                            </div>
                        </div>
                        <div className='productaritcle-info'>
                            <div className='productarticle-info-h1'>
                                <span className='info-h1-company'>{props.company}</span>
                                <span className='info-h1-name'>{props.name}</span>
                            </div>
                            <div className='productarticle-price'>
                                <span className='info-price-degree'>{props.discountDegree}%</span>
                                <span className='info-price-price'>{props.discountedPrice.toLocaleString()}</span>
                            </div>
                            <div className='productarticle-review'>
                                <p>
                                    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fillRule="evenodd" d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"></path></svg>
                                    <span className='avg'>{getRandom2(3,5)}</span>
                                    <span className='review-num'>리뷰 {getRandom(10,2500)}</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </Link>

    )
}
