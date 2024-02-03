import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.scss';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('London');

    useEffect(() => {
        const apiKey = '6e764a969f2d2dad5e2c19d1418da65e';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl)
            .then(response => {
                setWeatherData(response.data);
                checkAndChangeBackground();
                checkAndChangepng();
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych pogodowych:', error);
            });
    }, [location]);

    const checkAndChangeBackground = () => {
        const weatherDescription = weatherData.weather?.[0]?.description?.toLowerCase();
        const body = document.body;

        if (weatherDescription && weatherDescription.includes('clear')) {
            body.style.backgroundImage = "url('https://img.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg?w=1380&t=st=1706995718~exp=1706996318~hmac=5aab55f3ceccd273f31d330001a41e5ee592f71533cf2e8fec6c2084bf21769d')";
        }
        if (weatherDescription && weatherDescription.includes('snow')) {
            body.style.backgroundImage = "url('https://img.freepik.com/free-photo/christmas-background-with-snow-overlay-design_1048-14808.jpg?w=1380&t=st=1706995100~exp=1706995700~hmac=a7407b8ded199c51d841f0f5752d3c00949f0a813038e452e9642c4e3c6afcc0')";
        }
        if (weatherDescription && weatherDescription.includes('clouds')) {
            body.style.backgroundImage = "url('https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg?w=1380&t=st=1706995312~exp=1706995912~hmac=8694c9eb1ad1febf68cc382c4b99b78b6927078bff1cb077d72030ff80e55256')";
        }
        if (weatherDescription && weatherDescription.includes('fog')) {
            body.style.backgroundImage = "url('https://img.freepik.com/free-photo/aerial-shot-tall-spruce-trees-foggy-yellow-sky_181624-29030.jpg?w=1380&t=st=1706995443~exp=1706996043~hmac=5ac366aab257b3f238315d837c162df5e6c76b34b11cbff4d0195dcf597c44ef')";
        }
        if (weatherDescription && weatherDescription.includes('mist')) {
            body.style.backgroundImage = "url('https://img.freepik.com/free-photo/aerial-shot-tall-spruce-trees-foggy-yellow-sky_181624-29030.jpg?w=1380&t=st=1706995443~exp=1706996043~hmac=5ac366aab257b3f238315d837c162df5e6c76b34b11cbff4d0195dcf597c44ef')";
        }
        if (weatherDescription && weatherDescription.includes('storm')) {
            body.style.backgroundImage = "url('https://img.freepik.com/free-photo/view-apocalyptic-dark-clouds_23-2151065808.jpg?t=st=1706995539~exp=1706999139~hmac=d5f4169d16c70c41b0137ae3ad1fe9d4c657ce42cc78a9583d290a9904eb0642&w=1380')";
        }

    };





    const checkAndChangepng = () => {
        const weatherDescription = weatherData.weather?.[0]?.description?.toLowerCase();
        const icon = document.querySelector('.weather__container__column__img');

        if (weatherDescription && weatherDescription.includes('clear')) {
            icon.style.backgroundImage = "url('/src/images/sunny.png";
        }
        if (weatherDescription && weatherDescription.includes('snow')) {
            icon.style.backgroundImage = "url('/src/images/icons8-snow-96.png";
        }
        if (weatherDescription && weatherDescription.includes('rain')) {
            icon.style.backgroundImage = "url('/src/images/rain.png";
        }
        if (weatherDescription && weatherDescription.includes('storm')) {
            icon.style.backgroundImage = "url('/src/images/storm.png";
        }
        if (weatherDescription && weatherDescription.includes('mist')) {
            icon.style.backgroundImage = "url('/src/images/mist.png";
        }
        if (weatherDescription && weatherDescription.includes('fog')) {
            icon.style.backgroundImage = "url('/src/images/mist.png";
        }
        if (weatherDescription && weatherDescription.includes('clouds')) {
            icon.style.backgroundImage = "url('/src/images/clouds.png";
        }
    };





    return (
        <section>
            <header className="header">
                <div className="header__inner">
                    <div className="logo">Weather_app</div>
                </div>
            </header>
            <div className="card">
                <div className="card__locations">
                    <input
                        className="card__locations__search"
                        type="text"
                        placeholder="Search location"
                        onKeyPress={(e) => e.key === 'Enter' && setLocation(e.target.value)}
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
                            <p className="card__details__container__info__item">{weatherData.main?.humidity}%</p>
                            <p className="card__details__container__info__item">{weatherData.wind?.speed}km/h</p>
                            <p className="card__details__container__info__item">{weatherData.rain?.['1h'] || 0}mm</p>
                        </div>
                    </div>
                    <div className="card__details__container__underscore"></div>
                </div>
            </div>

            <div className="weather">
                <div className="weather__container">
                    <p className="weather__container__item">{weatherData.main?.temp}°C</p>
                    <div className="weather__container__box">
                        <div className="weather__container__box__item">{location}</div>
                        <div className="weather__container__box__details">
                            <p className="weather__container__box__details__item">{getCurrentTime()}</p>
                            <p className="weather__container__box__details__item">-</p>
                            <p className="weather__container__box__details__item">{getCurrentDayOfWeek()}</p>
                            <p className="weather__container__box__details__item">,</p>
                            <p className="weather__container__box__details__item">{getCurrentDate()}</p>
                        </div>
                    </div>
                    <div className="weather__container__column">
                        <div className="weather__container__column__img">
                        </div>
                        <p className="weather__container__column__item">{weatherData.weather?.[0]?.description || 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weather;

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    return dayOfWeek;
}

function getCurrentDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getFullYear().toString().slice(-2);
    return `${day} ${month}'${year}`;
}
