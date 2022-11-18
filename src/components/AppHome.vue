<script>
export default {
    name:"AppHome",
    data() {
        return {

        }
    }
}
</script>


<template>
    <section id="home">
    <div class="container">
      <div class="row jumbo">
        <div class="col-6 text">
            <h2>The biggest platform for your growth</h2>
            <p class="text-secondar">There are many variations of passages of Lorem Ipsus available, but the majority have suffered alteration in some form</p>
            <button type="button" class="btn btn-primary">Read More</button>
        </div>
        <div class="col-6 picture">
            <img :src="'/img/27-1.png'" alt="">
        </div>
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
</template>

<style lang="scss">
@use "../partials/variables.scss";
#home {
    & .text {
    }
    & .picture {
      height:250px;

    img {
        width:100%;
    }
  }
  .jumbo {
    background-color: #f2f7ff;
    padding: 20px;
  }
  .col-4 {
    height: 200px;
    border: 2px solid black;
  }
  .tricks .col-6 {
    height: 250px; 
    border: 2px solid green;
  }
}</style>