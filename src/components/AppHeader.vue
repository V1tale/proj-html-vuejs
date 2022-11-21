<script>
import {store} from "../store"
export default {
  name: "AppHeader",
    data() {
      return {
        store
      }
    },

}
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div id="logo">
        <img :src="'/img/logo-2.png'" alt="">
      </div>
      <div id="menu" class="d-flex justify-content-between align-items-center">
        <div class="list">
          <ul class="d-flex align-items-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#footer">About-Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contacts">Contact Us</a></li>
          </ul>
        </div>
        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        <div class="cart">
          <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
          <div class="number rounded-circle"><span>{{store.articles.length}}</span></div>
        </div>
        <button type="button" class="btn btn-primary">Get Started</button>


      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../general.scss" as *;
header {
    height: var(--header-height);
    padding: 5px;
    position:fixed;
    top:0;
    left:0;
    z-index: 999;
    background-color: white;
    width:100%;

}
#logo img {
    width:30px;
}

#menu {
  padding: 5px;
  a {
      color:black;
      text-decoration: none;
    &:hover {
      color: var(--main-color);
    }
    }
    ul {
      margin-bottom:0;
    }
  .list li{
    margin-left: 15px;
    font-size: .8rem;
    position: relative;
    top:0;
    left:0;

    &:hover::after {
      content:"";
      position: absolute;
      bottom:-30px;
      left:0;
      width:100%;
      height:2px;
      background-color: var(--main-color);
    }

  }
  & button {
    margin-left:20px;
    padding: 3px 10px;
  }
  & i {
    position:relative;
        z-index:10;
        margin-left:10px;
      }
  .buttons {
    width:150px; 
    height: 100%;
    background-color: black;
  }
}
.cart {
      position: relative;
      top:0;
      left:0; 
    }
.number {
        width:20px;
        height:20px;
        background-color: var(--main-color) ;
        position:absolute;
        top:-10px;
        right:-10px;
        text-align: center;
        line-height: 17px;
        z-index:9;
        color:white;
      }

</style>