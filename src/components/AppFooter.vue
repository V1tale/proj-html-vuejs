<script>
import {store} from "../store"
export default {
  name: "AppFooter",
    data() {
      return {
      store,
      }
    }

}
</script>

<template>
  <section id="footer">
    <div class="container">
      <div class="row justify-content-between g-5">
        <div class="col-6 col-md-3">
          <div class="box">
            <div class="logo d-flex align-items-center">
              <img :src="'img/logo-2.png'" alt="">
                <h3>SOFBOX</h3>
            </div>
            <p class="text-secondary">'ll' remember you and the things that we used to do... and the things that we used to say. I'l remember you... always</p>
            <span class="text-secondary">Copyright @ 2018 <a href="a-link">Sofbox</a></span>
          </div>
        </div>
        <div v-for="footerList in store.footerMenu" class="col-6 col-md-3">
          <div class="box">
            <h4>{{footerList.title}}</h4>
            <ul>
              <li v-for="footerContent in footerList.content">
                <a :href="footerContent.links">{{footerContent.item}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#footer {
  padding:2rem;
  scroll-margin:var(--header-height);
  .logo h3 {
    color: var(--main-color)
  }
  .col-md-3 {
    ul {
      padding:0;
      a {
        color: gray;
        text-decoration: none;
        line-height: 2rem;
        &:hover {
          color: var(--main-color);
        }
      }
    }
  }
}
</style>