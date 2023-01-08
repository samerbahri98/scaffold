import { ReactNode, useEffect, useState } from "react";
import {
	createBrowserRouter,
	Navigate,
	redirect,
	RouterProvider,
	useNavigate,
} from "react-router-dom";
import { Login, Home } from "./pages";
import User from "./interfaces/User";

type ProtectedRouteProps = {
	children: React.ComponentElement<{}, any>;
	user: User | null;
};

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
	useEffect(() => {
		if (user === null) redirect("/login");
	}, [user]);
	return children;
};

const router = (user: User | null) =>
	createBrowserRouter([
		{
			path: "/",
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
