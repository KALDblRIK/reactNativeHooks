import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import UsersScreen from '../Containers/UsersScreen'
import LoginScreen from '../Containers/LoginScreen'
import i18n from '../I18n';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens

const PublicNavigator = createStackNavigator({
  PublicUsers: UsersScreen,
  PublicLogin: LoginScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: styles.header,
  }
})

const PrivateNavigator = createBottomTabNavigator({
  PrivateUsers: createStackNavigator({
    Users: UsersScreen,
  }),
  // UsersScreen,
}, {
  // defaultNavigationOptions: {
  //   headerStyle: styles.header,
  // },
})

const MainNavigation = createSwitchNavigator({
  Public: PublicNavigator,
  Private: PrivateNavigator,
});

export default createAppContainer(MainNavigation)
