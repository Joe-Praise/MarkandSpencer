import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './componets/pages/Home';
import Women from './componets/pages/Women';
import Shop from './componets/pages/Shop';
import DataContext from './componets/Context/Context';
import SingleProduct from './componets/pages/SingleProduct';
import Cart from './componets/pages/Cart';
import Signin from './componets/pages/SignIn';
import SignUp from './componets/pages/SignUp';
import DashBoard from './componets/Admin/Pages/DashBoard';
import CreateUser from './componets/Admin/Pages/CreateUser';
import CreateProduct from './componets/Admin/Pages/CreateProduct';
import Products from './componets/Admin/Pages/Products';
import Users from './componets/Admin/Pages/Users';
import AdminSignIn from './componets/pages/AdminSignIn';
import MainNavigation from './MainNavigation';
import MainAdminNavigation from './componets/Admin/MainAdminNavigation';
import ErrorPage from './Helper/ErrorPage';
import ScrollToTop from './Helper/ScrollToTop';
import AdminErrorPage from './Helper/AdminErrorPage';
import Toastify from './Helper/Toastify';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainNavigation />,
// 	errorElement:<ErrorPage/>,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/women", element: <Women /> },
//       { path: "/shop", element: <Shop /> },
//       { path: "/Product/:id", element: <SingleProduct /> },
//       { path: "/cart", element: <Cart /> },
//       { path: "/signin", element: <Signin /> },
//       { path: "/signup", element: <SignUp /> },
//       { path: "/adminsignin", element: <AdminSignIn /> },
//     ],
//   },
//   {
//     path: "/secureadmin",
//     element: <MainAdminNavigation />,
//     children: [
// 		{path: '/secureadmin/dashboard', element: <DashBoard/>},
// 		{path: '/secureadmin/createuser', element: <CreateUser/>},
// 		{path: '/secureadmin/createproduct', element: <CreateProduct/>},
// 		{path: '/secureadmin/products', element: <Products/>},
// 		{path: '/secureadmin/users', element: <Users/>},

// 	],
//   }
// ]);

// const router = createBrowserRouter(createRoutesFromElements(<></>));

function App() {
	return (
		<DataContext>
			<BrowserRouter>
				<Toastify />
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<MainNavigation />}>
						<Route index element={<Home />} />
						<Route path='/women' element={<Women />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/Product/:id' element={<SingleProduct />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/signin' element={<Signin />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/adminsignin' element={<AdminSignIn />} />
						<Route path='*' element={<ErrorPage />} />
					</Route>

					<Route path='/secureadmin' element={<MainAdminNavigation />}>
						<Route path='/secureadmin/dashboard' element={<DashBoard />} />
						<Route path='/secureadmin/createuser' element={<CreateUser />} />
						<Route
							path='/secureadmin/createproduct'
							element={<CreateProduct />}
						/>
						<Route path='/secureadmin/products' element={<Products />} />
						<Route path='/secureadmin/users' element={<Users />} />
						<Route path='*' element={<AdminErrorPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			{/* <RouterProvider router={router} /> */}
			{/* <RootRouteComponent/> */}
		</DataContext>
	);
}

export default App;
