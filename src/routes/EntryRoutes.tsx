import LandingPage from "../pages/LandingPage";
  import type { RouteObject } from "react-router-dom";

export const EntryRoute:RouteObject[] = [
        {
          element: <LandingPage />,
          path: '/'
        },
    ]