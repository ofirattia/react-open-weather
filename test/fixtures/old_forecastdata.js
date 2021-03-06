var forecastData = {
  city: {
    id: 2867714,
    name: 'Munich',
    coord: { lon: 11.5754, lat: 48.1371 },
    country: 'DE',
    population: 1260391,
    timezone: 7200,
  },
  cod: '200',
  message: 0.0963073,
  cnt: 5,
  list: [
    {
      dt: 1571047200,
      sunrise: 1571031045,
      sunset: 1571070510,
      temp: {
        day: 21.57,
        min: 13.22,
        max: 21.57,
        night: 13.22,
        eve: 20.92,
        morn: 21.57,
      },
      pressure: 1014.45,
      humidity: 64,
      weather: [
        { id: 800, main: 'Clear', description: 'sky is clear', icon: '01d' },
      ],
      speed: 2.66,
      deg: 56,
      clouds: 0,
    },
    {
      dt: 1571133600,
      sunrise: 1571117534,
      sunset: 1571156794,
      temp: {
        day: 15.3,
        min: 10.15,
        max: 18.26,
        night: 10.2,
        eve: 17.35,
        morn: 10.68,
      },
      pressure: 1007.16,
      humidity: 74,
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
      ],
      speed: 2.23,
      deg: 133,
      clouds: 0,
      rain: 0.94,
    },
    {
      dt: 1571220000,
      sunrise: 1571204022,
      sunset: 1571243079,
      temp: {
        day: 12.2,
        min: 7.5,
        max: 14.95,
        night: 8.6,
        eve: 14.95,
        morn: 8.12,
      },
      pressure: 1017.39,
      humidity: 70,
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
      ],
      speed: 4.44,
      deg: 234,
      clouds: 0,
      rain: 0.31,
    },
    {
      dt: 1571306400,
      sunrise: 1571290512,
      sunset: 1571329364,
      temp: {
        day: 12.49,
        min: 7.74,
        max: 15.22,
        night: 11.03,
        eve: 14.42,
        morn: 7.74,
      },
      pressure: 1018.28,
      humidity: 66,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      speed: 0.79,
      deg: 157,
      clouds: 94,
    },
    {
      dt: 1571392800,
      sunrise: 1571377001,
      sunset: 1571415651,
      temp: {
        day: 12.9,
        min: 7.46,
        max: 16.26,
        night: 11.63,
        eve: 15.84,
        morn: 8.46,
      },
      pressure: 1016.24,
      humidity: 78,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      speed: 3.24,
      deg: 118,
      clouds: 33,
    },
  ],
};

var mappedForecastData = {
  location: {
    id: 2867714,
    name: 'Munich',
    coord: { lon: 11.5754, lat: 48.1371 },
    country: 'DE',
    population: 1260391,
    timezone: 7200,
  },
  days: [
    {
      date: 'Mon 14 October',
      description: 'Clear',
      icon: '01d',
      temperature: {
        min: '13',
        max: '22',
        current: '21',
      },
      wind: '3',
      humidity: 64,
    },
    {
      date: 'Tue 15 October',
      description: 'Rain',
      icon: '10d',
      temperature: {
        min: '10',
        max: '18',
      },
      wind: '2',
      humidity: 74,
    },
    {
      date: 'Wed 16 October',
      description: 'Rain',
      icon: '10d',
      temperature: {
        min: '8',
        max: '15',
      },
      wind: '4',
      humidity: 70,
    },
    {
      date: 'Thu 17 October',
      description: 'Clouds',
      icon: '04d',
      temperature: {
        min: '8',
        max: '15',
      },
      wind: '1',
      humidity: 66,
    },
    {
      date: 'Fri 18 October',
      description: 'Clouds',
      icon: '03d',
      temperature: {
        min: '7',
        max: '16',
      },
      wind: '3',
      humidity: 78,
    },
  ],
};

module.exports = {
  forecastData,
  mappedForecastData,
};
