<script>

export default {
  name: "AppMain",
    data() {
      return {
        
      }
    }

}
</script>

<template>
  <!-- APP HOME -->
  <section id="home">
    <div class="container">
      <div class="row">
        <div class="col-6 left"></div>
        <div class="col-6 right"></div>
      </div>
      <div class="benefit row">
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
      <div class=" tricks row">
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>
    </div>

  </section>
  <!-- /APP HOME -->
</template>

<style lang="scss">
#home {
  height: 200px;
  & .left {

    height: 200px;
    background-color: lime;
  }
  & .right {
    height:200px;
    background-color: fuchsia;
  }
  .col-4 {
    height: 200px;
    border: 2px solid black;
  }
  .tricks .col-6 {
    height: 250px; 
    border: 2px solid green;
  }
}
</style>