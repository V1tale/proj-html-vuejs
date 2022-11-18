<script>
import AppHome from "./AppHome.vue"
import AppFeatures from "./AppFeatures.vue"
export default {
  name: "AppMain",
    data() {
      return {
        
      }
    },
  components: {
    AppHome,
    AppFeatures,
  }
}
</script>

<template>
 <AppHome />
  <AppFeatures />
  <!-- APP TESTIMONIALS -->
  <section id="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>
      <div class="posts"></div>
      <div class="row">
        <div class="col-4"><div class="box"></div></div>
        <div class="col-4"><div class="box"></div></div>
        <div class="col-4"><div class="box"></div></div>
      </div>
    </div>
  </section>
  <!-- /APP TESTIMONIALS -->
  <!-- APP CONTACTS -->
  <section id="contacts">
    <div class="container">
      <div class="title"></div>
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>
    </div>

  </section>
  <!-- /APP CONTACTS -->
</template>

<style lang="scss">


#testimonials {
  .col-6 {
    height: 150px;
    background-color: gray;
    border: 2px solid black;
  }
  .box {
    height: 150px;
    background-color: purple;
  }
  .posts {
    height: 100px;
    background-color: darkcyan;
  }
}
  #contacts {
    .title {
      height: 100px;
      background-color: olive;
    }
    .col-6 {
      height: 300px;
      background-color: blue;
      border: 2px solid pink
    }
  }
</style>