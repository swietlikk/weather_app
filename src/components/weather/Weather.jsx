import React, { useState, useEffect } from 'react';
import './weather.scss';

const Weather = () => {


    return (
        <section>
            <header className="header">
                <div className="header__inner">
                    <div className="logo"> Weather_app </div>
                </div>
            </header>
            <div className="card">
                <div className="card__locations">
                    <input
                        className="card__locations__search"
                        type="text"
                        placeholder="Search location"
                    />
                    <div className="card__locations__underscore"></div>
                    <p className="card__locations__example">Warsaw</p>
                    <p className="card__locations__example">London</p>
                    <p className="card__locations__example">New York</p>
                    <p className="card__locations__example">Oslo</p>
                </div>
                <div className="card__details">
                    <div className="card__details__underscore"></div>
                    <h1 className="card__details__hdl">Weather Details</h1>

                    <div className="card__details__container">
                        <div className="card__details__container__dsc">
                            <p className="card__details__container__dsc__item">Cloudy</p>
                            <p className="card__details__container__dsc__item">Humidity</p>
                            <p className="card__details__container__dsc__item">Wind</p>
                            <p className="card__details__container__dsc__item">Rain</p>
                        </div>
                        <div className="card__details__container__info">
                            <p className="card__details__container__info__item">80%</p>
                            <p className="card__details__container__info__item">62%</p>
                            <p className="card__details__container__info__item">8km/h</p>
                            <p className="card__details__container__info__item">8mm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="weather">
                <div className="weather__container">
                    <p className="weather__container__item">08°</p>
                    <div className="weather__container__box">
                        <p className="weather__container__box__item">London</p>
                        <div className="weather__container__box__details">
                            <p className="weather__container__box__details__item">06:10</p>
                            <p className="weather__container__box__details__item">-</p>
                            <p className="weather__container__box__details__item">Friday</p>
                            <p className="weather__container__box__details__item">,</p>
                            <p className="weather__container__box__details__item">10 Oct'10</p>
                        </div>
                    </div>
                    <div className="weather__container__column">
                        <div className="weather__container__column__img"></div>
                        <p className="weather__container__column__item">Rainy</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weather;
