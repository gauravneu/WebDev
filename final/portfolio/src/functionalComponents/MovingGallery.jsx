import React, { useState, useEffect } from 'react';
import '../static/css/MovingGallery.css'
import '../static/css/css-gg.css'
import projectImages from '../static/javascripts/projectImages';
import Button from './Button';
function MovingGallery({ pag1 }) {

    const [picIndex, setPicIndex] = useState(0);
    let images = [];
    let j = 0;
    for (let i = 0; i < projectImages.length; i++) {
        if (projectImages[i].projectName === pag1) {
            images[j] = projectImages[i].path;
            j++;
        }
    }
    const imagesLength = images.length - 1;
    const changeImageInterval = 2500;

    useEffect(() => {
        const switchInterval = setInterval(() => {
            setPicIndex((picIndex + 1) % (imagesLength + 1));
        }, changeImageInterval);
        return () => clearInterval(switchInterval);
    });


    const goBack = () => {
        if (picIndex !== 0) {
            setPicIndex(picIndex - 1);
        } else {
            setPicIndex(imagesLength);
        }
    };

    const goNext = () => {
        if (picIndex !== imagesLength) {
            setPicIndex(picIndex + 1);
        } else {
            setPicIndex(0);
        }
    };

    return (
        <div className="movingGallery">
            <div className='movingGallery__div'>
                <Button className={`movingGallery__arrow`}
                    onClick={goBack}
                    ariaLabel={`Press this button to see previous pics`}
                    title={<i className='gg-chevron-left'></i>} />
                <img className='movingGallery__img'
                    src={images[picIndex]}
                    alt={`Land Scape ${picIndex}`} />
                <Button className={`movingGallery__arrow`}
                    onClick={goNext}
                    ariaLabel={`Press this button to see next pic`}
                    title={<i className='gg-chevron-right'></i>} />
            </div>
        </div>
    );
};
export default MovingGallery;
