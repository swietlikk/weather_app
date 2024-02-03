import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.scss';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('London');
    const [searchText, setSearchText] = useState('');

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
            body.style.backgroundImage = "url('https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        }
        if (weatherDescription && weatherDescription.includes('snow')) {
            body.style.backgroundImage = "url('https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        }
        if (weatherDescription && weatherDescription.includes('clouds')) {
            body.style.backgroundImage = "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        }
        if (weatherDescription && weatherDescription.includes('fog')) {
            body.style.backgroundImage = "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        }
        if (weatherDescription && weatherDescription.includes('mist')) {
            body.style.backgroundImage = "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        }
        if (weatherDescription && weatherDescription.includes('storm')) {
            body.style.backgroundImage = "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        }
        if (weatherDescription && weatherDescription.includes('rain')) {
            body.style.backgroundImage = "url('https://media.istockphoto.com/id/1257951336/pl/zdj%C4%99cie/przezroczysty-parasol-pod-deszczem-przed-kroplami-wody-rozpryskuje-si%C4%99-t%C5%82o-deszczowa-pogoda.jpg?s=612x612&w=0&k=20&c=MuXhpU6rmNm41StaJ_UDvtY9bPHIBqoPVlf0eku7TLw=')";
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

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const getCurrentDayOfWeek = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayOfWeek = daysOfWeek[now.getDay()];
        return dayOfWeek;
    };

    const getCurrentDate = () => {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = now.toLocaleString('en-US', { month: 'short' });
        const year = now.getFullYear().toString().slice(-2);
        return `${day} ${month}'${year}`;
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
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && setLocation(searchText)}
                    />
                    <div className="card__locations__underscore"></div>
                    <p className="card__locations__example" onClick={() => setSearchText('Warsaw')}>Warsaw</p>
                    <p className="card__locations__example" onClick={() => setSearchText('London')}>London</p>
                    <p className="card__locations__example" onClick={() => setSearchText('New York')}>New York</p>
                    <p className="card__locations__example" onClick={() => setSearchText('Oslo')}>Oslo</p>
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
                        <div className="weather__container__column__img"></div>
                        <p className="weather__container__column__item">{weatherData.weather?.[0]?.description || 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weather;
