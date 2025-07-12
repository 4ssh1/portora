import SignupPage from "@/pages/SignupPage";
import LandingPage from "../pages/LandingPage";
  import type { RouteObject } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

export const EntryRoute:RouteObject[] = [
        {
          element: <LandingPage />,
          path: '/'
        },
        {
          element: <SignupPage />,
          path: '/sign-in'
        },
        {
          element: <LoginPage />,
          path: 'log-in'
        },
    ]