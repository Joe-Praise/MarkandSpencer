import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/pages/Home";
import Women from "./componets/pages/Women";
import Shop from "./componets/pages/Shop";
import DataContext from "./componets/Context/Context";
import SingleProduct from "./componets/pages/SingleProduct";
import Cart from "./componets/pages/Cart";
import Signin from "./componets/pages/SignIn";
import SignUp from "./componets/pages/SignUp";
import DashBoard from "./componets/Admin/Pages/DashBoard";
import CreateUser from "./componets/Admin/Pages/CreateUser";
import CreateProduct from "./componets/Admin/Pages/CreateProduct";
import Products from "./componets/Admin/Pages/Products";
import Users from "./componets/Admin/Pages/Users";
import AdminSignIn from "./componets/Admin/AdminSignIn";

function App() {

	return (
		<DataContext>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/women" element={<Women />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/Product/:id" element={<SingleProduct />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/adminsignin" element={<AdminSignIn/>}/>
					<Route path="/secureadmin/dashboard" element={<DashBoard />} />
					<Route path="/secureadmin/createuser" element={<CreateUser />} />
					<Route path="/secureadmin/createproduct" element={<CreateProduct />} />
					<Route path="/secureadmin/products" element={<Products />} />
					<Route path="/secureadmin/users" element={<Users/>}/>
				</Routes>
			</BrowserRouter>
		</DataContext>
	);
}

export default App;
