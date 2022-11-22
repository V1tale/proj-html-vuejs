<script>
import {store} from "../store"
export default {
    name:"AppContacts",
    data() {
        return {
          store,
          
        }       
      },
}
</script>

<template>
<section id="contacts">
    <div class="container">
      <div class="title">
        <h2>Get in touch with our team</h2>
        <p class="text-secondary">Get in touch with us to find out what's new in our amazing world</p>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="box">
            <img :src="'/img/map.jpg'" alt="">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="box">
            <div class="top">
              <img :src="'img/35.png'" alt="">
              <h4>9840 Shore st, Fond Du Lac, WI54935</h4>
              <h5 class="text-secondary">0 1223 456 789</h5>
              <h5 class="text-secondary">mail@sofbox.com</h5>
            </div>
            <div class="social d-flex">
              <div v-for="social in store.social" class="social-icon">
                <a :href="social.link"><i :class="social.icon"></i></a>
              </div>

            </div>
            <div class="form">
              <h3>Get In Touch</h3>
              <div class="name-email d-flex justify-content-between">
                <div class="form-floating mb-3">
                  <input v-model="store.name" type="text" class="form-control" id="name" placeholder="Your Name">
                  <label for="name">Your name</label>
                </div>
                <div class="form-floating mb-3">
                  <input v-model="store.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Your Email</label>
                </div>
              </div>
                <div class="form-floating mb-3">
                  <input v-model="store.subject" type="text" class="form-control" id="subject" placeholder="Your subject">
                  <label for="subject">Your subject</label>
                </div>
              <div class="form-floating">
                <textarea v-model="store.message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Your message</label>
                <button @click="$emit('getData')" type="button" class="btn btn-primary">Send Message</button>
                <!-- DEBUG -->
                <!-- <h1>{{store.messages}}</h1>
                <h1>{{store.messages.length}}</h1> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
 #contacts {
  scroll-margin:var(--header-height);
    .title {
        text-align: center;
        padding: 2rem 0;
    }
    .top img {
      width: 100px;
      margin-bottom:2rem;
    }
    .col-md-6 {

      .box {
        padding: 10px;

      }
      h5 {
        font-size: 1rem;
      }
      h4 {
        font-size: 1.2rem;
      }
      .social-icon {
        width: 40px;
        height: 40px;
        padding:5px;
        margin: 5px;
        border: 1px solid gray;
        text-align: center;
        font-size: 1.4rem;
        line-height: 25px;
        color: var(--main-color);
        &:hover {
          color:white;
          background-color: var(--main-color);
        }
        & a {
          color:inherit;
        }
      }
      .form {
        margin-top: 2rem;
        button {
          margin-top: 1rem;
        }
        textarea  {
          height: 200px;
          resize: none;

        }
      }
    }
  }
</style>