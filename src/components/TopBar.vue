<template>
  <nav class='px-16 py-6 flex justify-between'>
    <div>
      <router-link :to="{name: 'home'}" class='text-green-500 font-bold text-4xl'>
        Medium Vue
      </router-link>
    </div>
    <div>
      <ul class='flex justify-between'>
        <li>
          <router-link :to="{name: 'home'}" active-class='active' exact>
            Home
          </router-link>
        </li>
        <template v-if='isLoggedIn'>
          <li>
            <router-link :to="{name: 'createArticle'}" active-class='active'>
              New Article
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'settings'}" active-class='active'>
              Settings
            </router-link>
          </li>
          <li>
            <router-link class='flex' :to="{name: 'userProfile', params: {slug: currentUser.username}}"
                         active-class='active'>
              <img class='mr-1' :src='currentUser.image' alt='userAvatar'>
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if='isAnonymous'>
          <li>
            <router-link :to="{name: 'login'}" active-class='active'>
              Sign In
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'register'}" active-class='active'>
              Sign Up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {getterTypes} from '@/store/modules/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous
    })
  }
}

</script>

<style scoped>
li {
  @apply text-gray-400 hover:text-gray-500 transition-colors mr-4 last:mr-0;
}

.active {
  @apply text-gray-500 font-bold;
}
</style>
