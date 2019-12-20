export default {
  getUsers: () => {
    return {
      ok: true,
      data: require('../Fixtures/users.json')
    }
  },
  postAuth: ({username, password}) => {
    if (username === 'login' && password === 'login') {
      return {
        ok: true,
        data: 'success',
      }
    }
    return {
      ok: false,
      data: 'wrong username or password'
    }
  }
}
