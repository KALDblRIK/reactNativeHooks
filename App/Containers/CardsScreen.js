import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import i18n from '../I18n';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CardsScreenStyle'

const CardsScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <Text>CardsScreen</Text>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

CardsScreen.navigationOptions = props => {
  return {
    headerTitle: i18n.t('HEADER_CARDS'),
    tabBarVisible: true,
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsScreen)
