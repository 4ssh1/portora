import HomePage from "../pages/HomePage"
import type { RouteObject } from "react-router-dom";

export const EntryRoute:RouteObject[] = [
        {
          element: <HomePage />,
          path: '/'
        },
    ]