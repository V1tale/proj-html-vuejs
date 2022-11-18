<script>

export default {
  name: "AppHeader",
    data() {
      return {
        
      }
    }

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
            <li><a href="">Home</a></li>
            <li><a href="">About-Us</a></li>
            <li><a href="">Feature</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <div class="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <div class="number rounded-circle"><span>0</span></div>
        </div>
        <button type="button" class="btn btn-primary">Get Started</button>


      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../general.scss";
:root {
  --header-height: 50px;
  --main-color: #3177f7;
}
header {
    height: var(--header-height);
    padding: 5px;
}
#logo img {
    width:30px;
}

#menu {
  padding: 5px;
  .list li{
    margin-left: 15px;
    font-size: .8rem;
    position: relative;
    top:0;
    left:0;

    &:hover::after {
      content:"";
      position: absolute;
      bottom:-20px;
      left:0;
      width:100%;
      height:2px;
      background-color: var(--main-color);
    }
    a {
      color:inherit;
      text-decoration: none;
    &:hover {
      color: var(--main-color);
    }
    }

  }
  & button {
    margin-left:20px;
    padding: 3px 10px;
  }
  & i {
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
        top:0;
        right:-10px;
        text-align: center;
        line-height: 15px;
        z-index:9;
        color:white;
      }

</style>