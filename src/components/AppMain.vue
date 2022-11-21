<script>
import AppHome from "./AppHome.vue"
import AppFeatures from "./AppFeatures.vue"
import AppTestimonials from "./AppTestimonials.vue"
import AppContacts from "./AppContacts.vue"
export default {
  name: "AppMain",
    data() {
      return {
        
      }
    },
  components: {
    AppHome,
    AppFeatures,
    AppTestimonials,
    AppContacts,
  }
}
</script>

<template>
 <AppHome />
  <AppFeatures />
  <AppTestimonials />
  <AppContacts />
</template>

<style lang="scss">
</style>