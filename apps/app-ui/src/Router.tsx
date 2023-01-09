import { ReactNode, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { Login, Home } from './pages';
import { User } from '@skaffold/ts-interfaces';

type ProtectedRouteProps = {
  children: React.ComponentElement<{}, any>;
  user: User | null;
};

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  useEffect(() => {
    if (user === null) redirect('/login');
  }, [user]);
  return children;
};

const router = (user: User | null) =>
  createBrowserRouter([
    // @PUBLIC ROUTES
    { path: '/login', element: <Login /> },
    // @PROTECTED ROUTES
    {
      path: '/',
      element: (
        <ProtectedRoute user={user}>
          <Home />
        </ProtectedRoute>
      ),
    },
  ]);

const Router = () => {
  const [user, setUser] = useState<User | null>(null);
  return <RouterProvider router={router(user)} />;
};

export default Router;
