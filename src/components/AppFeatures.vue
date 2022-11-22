<script>
import {store} from "../store"
export default {
    name:"AppFeatures",
    data() {
        return {
            store,
            
        }
    }
}
</script>

<template>
    <section id="features">
        <div class="container">
            <div class="top d-flex justify-content-between align-items-center">
                <div class="title">
                    <h2>Popular features that your business needs</h2>
                    <p class="text-secondary"> All I needed was the love you gave. All I needed for another day... and all I've ever knew... only you</p>
                </div>
                <button type="button" class="btn btn-primary">Explore more features</button>
            </div>
            <div class="row grid wrap g-4">
                <div v-for="cards in store.features" class="col-12 col-md-3">
                    <div class="box">
                        <h3>{{cards.title}}</h3>
                        <img :src="cards.img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#features {
    scroll-margin:var(--header-height);
    background-image: url("/img/14.png");
    background-repeat: no-repeat;
    background-size: 350px;
    background-position: -200px;
  & .title {
    padding-right: 2rem;
    margin: 2rem 0;
  }
  .grid  {
    margin:2rem;
    .box:hover:nth-child(3n +1) {
                background-color: rgb(143, 143, 238);
                color:white;
          img {

            filter:brightness(300%);
          }
        }
  .box {
    box-shadow: 1px 1px 20px gray;
    padding: 15px 15px 40px 15px;
    border-radius: 5px;   
    background-color: white;
    img {
        width:50px;
        margin-top: 20px;

    }
    h3 {
        font-size: 1rem;
    }
  }
  .col-md-3 {
      &:nth-child(3n +1) {
          img {
            filter:hue-rotate(10deg);
          }
        }
        &:nth-child(3n +2) {
            img {
                filter:hue-rotate(120deg);

            }
        }
        &:nth-child(3n +3) {
            img {
                filter:hue-rotate(290deg);
            }
        }
    }
  }
}</style>