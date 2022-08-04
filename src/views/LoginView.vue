<template>
  <div>
    <h1 class='text-center text-3xl mb-1'>Sign In</h1>
    <p class='text-center text-green-500 hover:underline hover:text-green-700 mb-3'>
      <router-link :to="{name: 'register'}">
        Need an account?
      </router-link>
    </p>
    <div class='w-2/5 mx-auto relative'>
      <validation-errors v-if='validationErrors' :validation-errors='validationErrors' />
      <form @submit.prevent='onSubmit'>
        <fieldset class='flex flex-col'>
          <input type='email' placeholder='Email' class='input' v-model='email'>
          <input type='password' placeholder='Password' class='input' v-model='password'>
        </fieldset>
        <button class='submitBtn' :disabled='isSubmitting'>Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'
import {mapState} from 'vuex'

export default {
  name: 'LoginView',
  components: {
    ValidationErrors
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(actionTypes.login, {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>

<style scoped>
.input {
  @apply rounded border px-5 py-3 mb-3;
}

.submitBtn {
  @apply w-1/3 bg-green-500 text-white px-5 py-3 rounded
  hover:bg-green-700 absolute right-0 disabled:opacity-50 disabled:bg-green-700;
}
</style>
