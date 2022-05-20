import { HomePage, LoginPage, SignupPage } from '../pages';

type RouteType = {
  key: string;
  title: string;
  path: string;
  element: React.ReactNode | React.ReactElement;
};
export const HomeRoutes: RouteType[] = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    key: 'login',
    title: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
  {
    key: 'signup',
    title: 'Signup',
    path: '/signup',
    element: <SignupPage />,
  },
];
