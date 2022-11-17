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
  <!-- APP FEATURES -->
  <section id="features">
<div class="container">
  <div class="top d-flex justify-content-between">
    <div class="title">

    </div>
    <div class="button">

    </div>
  </div>
  <div class="row grid wrap g-4">
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
    <div class="col-3"><div class="box"></div></div>
  </div>
</div>
  </section>
  <!-- /APP FEATURES -->
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
#home {
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
#features {
  & .title {
    width:50%;
    height: 80px;
    background-color: red;
  }
  & .button {
    width:50%;
    height: 80px;
    background-color: orange;
  }
  .grid .box {
    height: 100px;
    background-color: yellow;
  }
}
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