<template>
  <div>
    <h1 class='text-center text-3xl mb-1'>Sign Up</h1>
    <p class='text-center text-green-500 hover:underline hover:text-green-700'>
      <router-link :to="{name: 'login'}">
        Need an account?
      </router-link>
    </p>
    <div class='w-2/5 mx-auto relative'>
      VALIDATION ERRORS
      <form @submit.prevent='onSubmit'>
        <fieldset class='flex flex-col'>
          <input type='text' placeholder='Username' class='input' v-model='username'>
          <input type='email' placeholder='Email' class='input' v-model='email'>
          <input type='password' placeholder='Password' class='input' v-model='password'>
        </fieldset>
        <button class='submitBtn' :disabled='isSubmitting'>Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        email: this.email,
        username: this.username,
        password: this.password
      })
        .then(user => {
          console.log('successfully register user', user)
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
