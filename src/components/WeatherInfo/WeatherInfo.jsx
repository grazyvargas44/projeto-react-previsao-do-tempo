import './WeatherInfo.css'

function WeatherInfo({ weather }) {
    



    return (
        <div className='weather-container'>
            <h2>{(!weather || weather.name)}</h2>

            <div className='weather-info'>
                {weather && <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Ícone do Clima" />}
                {weather && <p className='temperature'>{Math.round(weather.main.temp)}°C</p>}
            </div>

            <p className='description'>{(!weather || weather.weather[0].description)}</p>

            <div className='details'>
                {weather && <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>}
                {weather && <p>Umidade: {(!weather || weather.main.humidity)}%</p>}
                {weather && <p>Pressão: {(!weather || weather.main.pressure)} hPa</p>}
            </div>
        </div>
    )
}

export default WeatherInfo