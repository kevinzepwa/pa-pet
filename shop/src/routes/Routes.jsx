import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog' exact component={Catalog}/>
            <Route path='/cart' exact component={Cart}/>
            <Route path='/catalog/:slug' exact component={Product}/>
        </Switch>
    )
}

export default Routes
