import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container, Menu, PageBody } from './AppStyled';

import MenuItem from './components/MenuItem';
import PrivateRoute from './components/PrivateRoute';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {

    return (
        <BrowserRouter>
            <Container>

                <Menu>
                    <MenuItem icon="/assets/store.png" link="/" />
                    <MenuItem icon="/assets/order.png" link="/orders" />
                    <MenuItem icon="/assets/profile.png" link="/profile" />
                </Menu>

                <PageBody>
                    <Switch>

                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute path="/orders">
                            <div>Pedidos</div>
                        </PrivateRoute>

                        <PrivateRoute path="/profile">
                            <div>Perfil</div>
                        </PrivateRoute>

                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>

                    </Switch>
                </PageBody>

            </Container>
        </BrowserRouter>
    );
}