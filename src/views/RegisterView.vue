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
            <input type='text' placeholder='Username' class='input'>
            <input type='email' placeholder='Email' class='input'>
            <input type='password' placeholder='Password' class='input'>
          </fieldset>
         <button class='submitBtn'>Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  methods: {
    onSubmit() {
      console.log('form')
    }
  }
}
</script>

<style scoped>
.input {
  @apply rounded border px-5 py-3 mb-3;
}

.submitBtn {
  @apply w-1/3 bg-green-500 text-white px-5 py-3 rounded hover:bg-green-700 absolute right-0;
}



</style>
