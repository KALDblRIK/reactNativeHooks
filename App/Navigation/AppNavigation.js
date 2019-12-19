import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import UsersScreen from '../Containers/UsersScreen'
import LoginScreen from '../Containers/LoginScreen'
import i18n from '../I18n';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens

const PublicNavigator = createStackNavigator({
  UsersScreen: {
    screen: UsersScreen,
    navigationOptions: {
      headerTitle: i18n.t('HEADER_USERS'),
      headerStyle: styles.header,
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: i18n.t('HEADER_LOGIN'),
      headerStyle: styles.header,
    }
  }
}, {
  headerMode: 'screen',
  initialRouteName: 'UsersScreen',
})

const MainNavigation = createSwitchNavigator({
  Public: PublicNavigator,
});

export default createAppContainer(MainNavigation)
