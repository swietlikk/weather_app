import React, { useState } from 'react';
import './weather.scss';

function Weather() {
    const [searchLocation, setSearchLocation] = useState('');

    const handleLocationChange = (event) => {
        setSearchLocation(event.target.value);
    };

    const handleSearch = () => {
        console.log('Wyszukiwanie lokalizacji:', searchLocation);
    };

    return (
        <section>
            <header className="header">
                <div className="header__inner">
                    <div className="logo"> Weather_app </div>
                </div>
            </header>
            <div className="card">
                <div className="card__locations">
                    <input className="card__locations__search"
                        type="text"
                        value={searchLocation}
                        onChange={handleLocationChange}
                        placeholder="Search location"
                    />
                    <div className="card__locations__underscore"></div>
                    <p className="card__locations__example">Warsaw</p>
                    <p className="card__locations__example">London</p>
                    <p className="card__locations__example">New York</p>
                    <p className="card__locations__example">Oslo</p>
                </div>
            </div>
        </section>
    );
}

export default Weather;
