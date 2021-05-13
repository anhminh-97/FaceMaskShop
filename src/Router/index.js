// import PrivateRoute from "./Private.Route";
import { ROUTER } from 'Constants/CommonConstants'
import {
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
} from 'Pages'
import * as React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PrivateLayout } from 'Components'
import PublicRoute from './Public.Route'
import PrivateRoute from './Private.Route'

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute exact path={ROUTER.Home} component={Home} />
      <PrivateRoute exact path={ROUTER.Dashboard} component={PrivateLayout} />
      <PrivateRoute
        path={`${ROUTER.OrderDetail}/:id`}
        component={OrderDetail}
      />
      <PrivateRoute exact path={ROUTER.AddProduct} component={AddProduct} />
      <PrivateRoute exact path={ROUTER.AllProducts} component={AllProducts} />
      <PrivateRoute exact path={ROUTER.AllOrders} component={AllOrders} />

      <PublicRoute
        path={`${ROUTER.ProductDetail}/:id`}
        component={ProductDetail}
      />
      <PublicRoute exact path={ROUTER.Shop} component={Shop} />
      <PublicRoute exact path={ROUTER.FAQ} component={FAQ} />
      <PublicRoute exact path={ROUTER.Contact} component={Contact} />
      <PublicRoute exact path={ROUTER.Checkout} component={Checkout} />
      <PublicRoute exact path={ROUTER.Register} component={Register} />
      <PublicRoute exact path={ROUTER.Login} component={Login} />
      <PublicRoute exact path={ROUTER.Payment} component={Payment} />
      <PublicRoute exact path={ROUTER.Profile} component={Profile} />
      <PublicRoute exact path={ROUTER.OrderSuccess} component={OrderSuccess} />
      <PublicRoute component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
