import React, { Component } from 'react'
import { Icon, Text } from 'native-base'
import UsersScreen from '../Containers/UsersScreen'
import LoginScreen from '../Containers/LoginScreen'
import CardsScreen from '../Containers/CardsScreen'
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
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Icon style={{color: tintColor}} name="contact" />
        )
      },
      tabBarLabel: ({ focused, tintColor }) => {
        return focused
        ? <Text style={{textAlign: 'center', color: tintColor }}>{i18n.t('HEADER_USERS')}</Text>
        : null
      }
    })
  }),
  PrivateCards: createStackNavigator({
    Cards: CardsScreen,
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Icon style={{color: tintColor}} name="images" />
        )
      },
      tabBarLabel: ({ focused, tintColor }) => {
        return focused
        ? <Text style={{textAlign: 'center', color: tintColor }}>{i18n.t('HEADER_CARDS')}</Text>
        : null
      }
    })
  }),
}, {
  lazy: true
})

const MainNavigation = createSwitchNavigator({
  Public: PublicNavigator,
  Private: PrivateNavigator,
});

export default createAppContainer(MainNavigation)
