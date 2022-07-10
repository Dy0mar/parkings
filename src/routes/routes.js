import {lazy} from "react";
import {HOME_ROUTE, USER_LIST_ROUTE} from "routes/path";


const Home = lazy(() => import("components/pages/home/Home").then((m) => ({default: m.Home})));
const UserList = lazy(() => import("components/pages/users/list/UserList").then((m) => ({default: m.UserList})));

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
    exact: false,
  },
];

export const authRoutes = [
  {
    path: USER_LIST_ROUTE,
    element: <UserList />,
    exact: false,
  },
];
