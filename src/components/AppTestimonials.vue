<script>
import {store} from "../store"
export default {
    name: "AppTestimonials",
    data() {
        return {
            store,
            
        }
    }
}
</script>

<template>
      <section id="testimonials">
        <div class="bg-wave">
            <div class="container">
                <div class="title">
                    <h2>Our Testimonials</h2>
                    <p class="text-secondary"> Meet our testimonials to ge to know how much exiting this experience can be</p>
                </div>
                <div class="staff row g-2">
                    <div v-for="person in store.testimonials" class="col-12 col-md-6">
                        <div class="box">
                            <img class="rounded-circle" :src="person.img" alt=""><br>
                            <span>{{person.name}}</span><span class="text-secondary"> - {{person.role}}</span>
                            <p class="text-secondary">{{person.description}}</p>
                        </div>
                    </div>
                </div>
            <div class="posts">
                <h2>Latest Posts</h2>
                <p class="text-secondary">If you are planning on developing a product landing</p>
            </div>
            <div class="row details">
                <div class="col-12 col-md-4">
                    <div class="box">
                        <img :src="'/img/19.jpg'" alt="">
                        <h3>Life lack meaning</h3>
                        <p class="text-secondary">Sailing takes me away where I've always heard it could be</p>
                        <div class="date">
                            <h5>28 November 2019</h5>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="box">
                        <img :src="'/img/18.jpg'" alt="">
                        <h3>Life lack meaning</h3>
                        <p class="text-secondary">Sailing takes me away where I've always heard it could be</p>
                        <div class="date">
                            <h5>28 November 2019</h5>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="box">
                        <img :src="'/img/17.jpg'" alt="">
                        <h3>Life lack meaning</h3>
                        <p class="text-secondary">Sailing takes me away where I've always heard it could be</p>
                        <div class="date">
                            <h5>28 November 2019</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss">
#testimonials {
    scroll-margin:var(--header-height);
    background: linear-gradient(#cfebf8 0, white 40%,);
    .bg-wave {
        background-image: url("/img/15.png");
        background-repeat: no-repeat;
    }
    .title {
        text-align: center;
        padding: 3rem 0;
    }
    .col-md-6 {
        position:relative;
        top:0;
        left:0;
    
    &:nth-child(odd)::after {
        content:"";
        width:15px;
        height:15px;
        border-radius: 50%;
        background-color: rgb(39, 39, 39);
        position:absolute;
        bottom:-10px;
        right:2.5px;
    }
    &:nth-child(even)::after {
        content:"";
        width:15px;
        height:15px;
        border-radius: 50%;
        background-color: rgb(39, 39, 39);
        position:absolute;
        bottom:-10px;
        left:2.5px;
    }
    &:hover::after {
        background-color: var(--main-color);
    }
    * {
        margin: .5rem 0;
    }
    img {
        width:80px;
    }

    .box {

        text-align: center;
        padding: 1rem;
        height: 200px;
        background-color: white;
        box-shadow: 1px 1px 5px gray;
        border-radius: 10px;
        max-width:800px;
        &::before {
        content:"";
        background-image: url("img/86.svg");
        background-repeat: no-repeat;
        background-size: 100%;
        position:absolute;
        width: 100px;
        height:100px;
        top:50%;
        left:50%;
        opacity:20%;
        transform: scaleX(-1);
        transform: translate(-50%);
        z-index: 2;
        }
    }
  }
  .details {
      .box {
          padding: 10px;
          border: 1px solid gray;
          position:relative;
          top:0;
          left:0;
        }
        .date {
            background-color: white;
            border: 1px solid gray;
            padding: 5px;
            position:absolute;
            top: 1rem;
            left:1rem;

        }
    }
  .posts {
    text-align: center;
    padding: 2rem 0;
  }
  .staff {
        cursor: pointer;
    }
}</style>