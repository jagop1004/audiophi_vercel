import React from "react";
//css
import "../../css/coreValues.css"

function Values() {
  return (
    <div className="coreValuesContainer">
        <div className="coreValuesContainer__values">
            <div className="coreValuesContainer__values__title">OUR CORE VALUES</div>
            <ul>
                <li className="coreValuesContainer__values__listItem">Uncompromising Quality</li>
                <li className="coreValuesContainer__values__listItem">Passion for Sound</li>
                <li className="coreValuesContainer__values__listItem">Customer-Centric Innovation</li>
                <li className="coreValuesContainer__values__listItem">Attention to Detail</li>
                <li className="coreValuesContainer__values__listItem">Sustainability & Responsibility</li>
                <li className="coreValuesContainer__values__listItem">Reliability</li>
            </ul>
            <div className="coreValuesContainer__values__resume">We focus on delivering the ultimate listening experience with our premium headphones, crafted for audiophiles who demand the best. Our products combine uncompromising sound quality, cutting-edge technology, and meticulous design to provide crystal-clear, immersive audio. With a customer-centric approach, we continually innovate to meet the needs of true sound enthusiasts, offering a personalized experience that exceeds expectations. Built to last and sustainably produced, our headphones not only elevate your music but also reflect our commitment to performance and the environment. Experience the difference with AudioPhi where exceptional sound meets precision engineering.</div>
        </div>
    </div>
  );
}

export default Values;
