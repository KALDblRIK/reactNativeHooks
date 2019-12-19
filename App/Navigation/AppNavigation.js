import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import UsersScreen from '../Containers/UsersScreen'
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
  }
}, {
  headerMode: 'screen',
  initialRouteName: 'UsersScreen',
})

const MainNavigation = createSwitchNavigator({
  Public: PublicNavigator,
});

export default createAppContainer(MainNavigation)
