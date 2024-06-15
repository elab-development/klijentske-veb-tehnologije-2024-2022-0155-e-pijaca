export interface Location {
    city: string;
    country: string;
    lat: number;
    long: number;
  }
 
  export interface Wind {
    chill: number;
    direction: string;
    speed: number;
  }
 
  export interface Condition {
    temperature: number;
    text: string;
    code: number;
  }
 
  export interface Forecast {
    day: string;
    date: number;
    high: number;
    low: number;
    text: string;
    code: number;
  }
 
  export interface WeatherData {
    location: Location;
    current_observation: {
      pubDate: number;
      wind: Wind;
      condition: Condition;
    };
    forecasts: Forecast[];
  }
 
