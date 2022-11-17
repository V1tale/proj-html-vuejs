<script>

export default {
  name: "AppFooter",
    data() {
      return {
        
      }
    }

}
</script>

<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#footer {
  height: 250px;
  background-color: rebeccapurple;
  .col-3 {
    height: 200px;
    background-color: orangered;
    border:2px solid yellow;
  }
}
</style>