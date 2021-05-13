import { lazy } from 'react'

const Home = lazy(() => import('./Public/Home'))
const Checkout = lazy(() => import('./Public/Checkout'))
const Contact = lazy(() => import('./Public/Contact'))
const FAQ = lazy(() => import('./Public/FAQ'))
const Login = lazy(() => import('./Public/Login'))
const NotFound = lazy(() => import('./Public/NotFound'))
const OrderSuccess = lazy(() => import('./Public/OrderSuccess'))
const Payment = lazy(() => import('./Public/Payment'))
const ProductDetail = lazy(() => import('./Public/ProductDetail'))
const Profile = lazy(() => import('./Public/Profile'))
const Register = lazy(() => import('./Public/Register'))
const Shop = lazy(() => import('./Public/Shop'))
const AddProduct = lazy(() => import('./Private/ProductsAdmin/AddProduct'))
const AllProducts = lazy(() => import('./Private/ProductsAdmin/AllProducts'))
const AllOrders = lazy(() => import('./Private/OrdersAdmin/AllOrders'))
const OrderDetail = lazy(() => import('./Private/OrdersAdmin/OrderDetail'))

export {
  Home,
  Checkout,
  Contact,
  FAQ,
  Login,
  NotFound,
  OrderSuccess,
  Payment,
  ProductDetail,
  Profile,
  Register,
  Shop,
  AddProduct,
  AllProducts,
  AllOrders,
  OrderDetail,
}
