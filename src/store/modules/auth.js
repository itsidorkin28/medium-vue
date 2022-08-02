import authApi from '@/api/auth'

const state = {
  isSubmitting: false
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
  registerSuccess(state) {
    state.isSubmitting = false
  },
  registerFailure(state) {
    state.isSubmitting = false
  }
}

const actions = {
  async register(context, credentials) {
    context.commit('registerStart')
    try {
      const {data} = await authApi.register(credentials)
      console.log(data.user)
      context.commit('registerSuccess', data.user)
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
