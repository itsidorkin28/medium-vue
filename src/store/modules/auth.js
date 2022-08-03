import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  async register(context, credentials) {
    context.commit('registerStart')
    try {
      const {data} = await authApi.register(credentials)
      console.log(data.user)
      context.commit('registerSuccess', data.user)
      setItem('accessToken', data.user.token)
      return data
    } catch (e) {
      console.log('errors', e)
      context.commit('registerFailure', e.response.data.errors)
    }
  }
}

export default {
  state, mutations, actions
}
