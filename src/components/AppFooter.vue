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
      <div class="row justify-content-between g-5">
        <div class="col-3">
          <div class="box">
            <div class="logo d-flex align-items-center">
              <img :src="'img/logo-2.png'" alt="">
                <h3>SOFBOX</h3>
            </div>
            <p class="text-secondary">'ll' remember you and the things that we used to do... and the things that we used to say. I'l remember you... always</p>
            <span class="text-secondary">Copyright @ 2018 <a href="a-link">Sofbox</a></span>
          </div>
        </div>
        <div class="col-3">
          <div class="box">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="">About-us</a>
              </li>
              <li>
                <a href="">Theme</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="box">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="">About-us</a>
              </li>
              <li>
                <a href="">Theme</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="box">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="">About-us</a>
              </li>
              <li>
                <a href="">Theme</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
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
  .col-3 {
    ul {
      padding:0;
      a {
        color: gray;
        text-decoration: none;
      }
    }
  }
}
</style>