<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue'

export default {
  name: "AppVue",
    data() {
      return {

      }
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter,
    }

}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
:root {
  --header-height: 70px;
  --main-color: #3177f7;
  --main-background: #f2f7ff;
  --hover-btn: rgb(41, 41, 41);
}
</style>