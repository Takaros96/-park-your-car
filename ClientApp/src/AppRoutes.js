import Home from "./components/Home";
import Login from "./components/Login";
import Review from "./components/Review";
import ParkingArea from "./components/ParkingArea";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/review',
    element: <Review />
  },
  {
    path: '/parking-area',
    element: <ParkingArea />
  }
];

export default AppRoutes;
