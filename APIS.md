### APIS

#### `/api/ping` - `[GET]`

Ping the microservice.

```json
// http://localhost:5544/api/ping

{
  "datetime": 1587299873790,
  "info": "PING_OK",
  "status": 200
}
```

#### `/api/data/search?query={query}` - `[GET]`

Get the list of the locations

```json
// http://localhost:5544/api/data/search?query==fran

{
  "datetime": 1587243203808,
  "info": "OK",
  "status": 200,
  "data": [
    {
      "title": "San Francisco",
      "location_type": "City",
      "woeid": 2487956,
      "latt_long": "37.777119, -122.41964"
    },
    {
      "title": "Frankfurt",
      "location_type": "City",
      "woeid": 650272,
      "latt_long": "50.112080,8.683410"
    }
  ]
}
```

The `woeid` propery is a unique identifier or the location.

#### `/api/data/location?id={locationId}` - `[GET]`

Get a detailed information about the weather by the city unique identifier (`woeid`).

```json
// http://localhost:5544/api/data/location?id=2487956

{
  "datetime": 1587243507104,
  "info": "OK",
  "status": 200,
  "data": {
    "consolidated_weather": [
      {
        "id": 5301380254269440,
        "weather_state_name": "Heavy Cloud",
        "weather_state_abbr": "hc",
        "wind_direction_compass": "SW",
        "created": "2020-04-18T18:16:18.213888Z",
        "applicable_date": "2020-04-18",
        "min_temp": 11.205,
        "max_temp": 15.905000000000001,
        "the_temp": 15.39,
        "wind_speed": 6.032539573506721,
        "wind_direction": 216.15446982909833,
        "air_pressure": 1018,
        "humidity": 65,
        "visibility": 13.527250855006761,
        "predictability": 71
      },
      {
        "id": 5385941013233664,
        "weather_state_name": "Heavy Cloud",
        "weather_state_abbr": "hc",
        "wind_direction_compass": "WSW",
        "created": "2020-04-18T18:16:20.640557Z",
        "applicable_date": "2020-04-19",
        "min_temp": 11.065,
        "max_temp": 15.065000000000001,
        "the_temp": 15.120000000000001,
        "wind_speed": 5.444855720549325,
        "wind_direction": 243.85982458455453,
        "air_pressure": 1018,
        "humidity": 70,
        "visibility": 12.975783921896127,
        "predictability": 71
      },
      {
        "id": 5791095562698752,
        "weather_state_name": "Showers",
        "weather_state_abbr": "s",
        "wind_direction_compass": "WSW",
        "created": "2020-04-18T18:16:23.796203Z",
        "applicable_date": "2020-04-20",
        "min_temp": 10.82,
        "max_temp": 14.165,
        "the_temp": 14.035,
        "wind_speed": 7.120388927511335,
        "wind_direction": 251.53300735085605,
        "air_pressure": 1019,
        "humidity": 73,
        "visibility": 12.980444205837905,
        "predictability": 73
      },
      {
        "id": 5411254644506624,
        "weather_state_name": "Clear",
        "weather_state_abbr": "c",
        "wind_direction_compass": "WNW",
        "created": "2020-04-18T18:16:26.752922Z",
        "applicable_date": "2020-04-21",
        "min_temp": 10.925,
        "max_temp": 16.560000000000002,
        "the_temp": 16.86,
        "wind_speed": 9.193745134104828,
        "wind_direction": 288.49923774539445,
        "air_pressure": 1023,
        "humidity": 64,
        "visibility": 14.19615694345025,
        "predictability": 68
      },
      {
        "id": 5716576185614336,
        "weather_state_name": "Heavy Cloud",
        "weather_state_abbr": "hc",
        "wind_direction_compass": "WNW",
        "created": "2020-04-18T18:16:29.717857Z",
        "applicable_date": "2020-04-22",
        "min_temp": 12.04,
        "max_temp": 18.875,
        "the_temp": 19.255000000000003,
        "wind_speed": 7.720771594917681,
        "wind_direction": 290.5029775581385,
        "air_pressure": 1025,
        "humidity": 67,
        "visibility": 13.603368826055833,
        "predictability": 71
      },
      {
        "id": 5071369521856512,
        "weather_state_name": "Light Cloud",
        "weather_state_abbr": "lc",
        "wind_direction_compass": "WNW",
        "created": "2020-04-18T18:16:32.796958Z",
        "applicable_date": "2020-04-23",
        "min_temp": 13.18,
        "max_temp": 19.049999999999997,
        "the_temp": 18.27,
        "wind_speed": 5.783177841406188,
        "wind_direction": 297,
        "air_pressure": 1019,
        "humidity": 71,
        "visibility": 9.999726596675416,
        "predictability": 70
      }
    ],
    "time": "2020-04-18T13:58:26.837833-07:00",
    "sun_rise": "2020-04-18T06:29:32.516304-07:00",
    "sun_set": "2020-04-18T19:47:51.994089-07:00",
    "timezone_name": "LMT",
    "parent": {
      "title": "California",
      "location_type": "Region / State / Province",
      "woeid": 2347563,
      "latt_long": "37.271881,-119.270233"
    },
    "sources": [
      {
        "title": "BBC",
        "slug": "bbc",
        "url": "http://www.bbc.co.uk/weather/",
        "crawl_rate": 360
      },
      {
        "title": "Forecast.io",
        "slug": "forecast-io",
        "url": "http://forecast.io/",
        "crawl_rate": 480
      },
      {
        "title": "HAMweather",
        "slug": "hamweather",
        "url": "http://www.hamweather.com/",
        "crawl_rate": 360
      },
      {
        "title": "Met Office",
        "slug": "met-office",
        "url": "http://www.metoffice.gov.uk/",
        "crawl_rate": 180
      },
      {
        "title": "OpenWeatherMap",
        "slug": "openweathermap",
        "url": "http://openweathermap.org/",
        "crawl_rate": 360
      },
      {
        "title": "Weather Underground",
        "slug": "wunderground",
        "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
        "crawl_rate": 720
      },
      {
        "title": "World Weather Online",
        "slug": "world-weather-online",
        "url": "http://www.worldweatheronline.com/",
        "crawl_rate": 360
      }
    ],
    "title": "San Francisco",
    "location_type": "City",
    "woeid": 2487956,
    "latt_long": "37.777119, -122.41964",
    "timezone": "US/Pacific"
  }
}
```

The weather data is provided from several different sources.

You will get an error if you provide an invalid location identifier:

```json
// http://localhost:5544/api/data/location?id=123

{
  "name": "MoleculerClientError",
  "message": "INVALID_LOCATION_ID",
  "code": 400
}
```
