import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

import Header from './components/Header';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
        },
        {
            defaultNavigationOptions: navigation => ({
                header: () => <Header {...navigation} />,
            }),
        }
    )
);

export default Routes;
