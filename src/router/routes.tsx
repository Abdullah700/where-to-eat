import React, {FC, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom';
import LandingPage from "containers/LandingPage/LandingPage";
import RandomLocation from "containers/RandomLocation/RandomLocation";

interface Routes {
    path: string,
    exact?: boolean,
    component: FC
}


const routes: Routes[] = [
    {
        path: '/',
        exact: true,
        component: LandingPage
    },
    {
        path: '/location',
        component: RandomLocation
    },
    {
        path: '*',
        component: LandingPage
    }
];
export const Routes: FC = () => {
    return (
        <Fragment>
            <Switch>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
                ))}
            </Switch>
        </Fragment>
    );
};
