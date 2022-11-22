<script>
import AppHome from "./AppHome.vue"
import AppFeatures from "./AppFeatures.vue"
import AppTestimonials from "./AppTestimonials.vue"
import AppContacts from "./AppContacts.vue"
import {store} from "../store"
export default {
  name: "AppMain",
    data() {
      return {
        store,
      }
    },
    methods: {
        getInfo() {
          this-store.messages.push({name:this.store.name, email:this.store.email, subject:this.store.subject, message:this.store.message,});
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
  <AppContacts @getData="getInfo()"/>
</template>

<style lang="scss">

</style>