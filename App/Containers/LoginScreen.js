import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Text,
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import AuthActions from '../Redux/AuthRedux'
import i18n from '../I18n';

// Styles
import styles from './Styles/LoginScreenStyle'

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    auth,
    postAuth,
    navigation,
  } = props

  const submit = () => {
    postAuth({ username, password });
  }

  useEffect(() => {
    if (auth.isAuth) {
      navigation.navigate('PrivateUsers')
    }
  }, [auth.isAuth])

  return (
    <Container style={styles.container}>
      <Content>
        <Form>
          <Item>
            <Input
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
            />
          </Item>
          <Item last>
            <Input
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />
          </Item>
          <Button
            full
            onPress={submit}
          >
            <Text>
              Login
            </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

LoginScreen.navigationOptions = props => {
  const { navigation } = props
  return {
    headerTitle: i18n.t('HEADER_LOGIN'),
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postAuth: (params) => dispatch(AuthActions.authRequest(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
