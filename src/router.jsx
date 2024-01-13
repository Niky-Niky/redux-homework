import { App } from "components/App";
import { MainPage } from "components/MainPage";
import { WeatherCard } from "components/WeatherCard";
import { WeatherHourly } from "components/WeatherHourly";
import { WeatherWeekly } from "components/WeatherWeekly";
import { WeatherMore } from "components/WeatherMore";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
    [
    {
        path: '/',
        element: <App/>,
        children:
        [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <WeatherCard/>,
                path: '/weather',
                children: 
                [
                    {
                        element: <WeatherHourly/>,
                        path: '/weather/:weatherId/hourly',
                    },
                    {
                        element: <WeatherWeekly/>,
                        path: '/weather/:weatherId/weekly',
                    },
                    {
                        element: <WeatherMore/>,
                        path: '/weather/:weatherId/more' 
                    }
                ]
            },
            {
                // path: '/about-us',
                // element: <AboutUs/>
            },
        ]
    }
    ])

