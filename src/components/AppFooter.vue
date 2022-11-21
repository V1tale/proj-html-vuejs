<script>

export default {
  name: "AppFooter",
    data() {
      return {
        footerMenu: [
          {
            title: "Menu",
            content: [ 
              {
                item:"About Us",
               links: "Link-A",
              },
              { 
                item:"Theme",
                links:"Link-B",
              },
              {
                item: "Features",
                links: "link-C"
              },
              {
                item: "Pricing",
                links: "link-D"
              },
              {
                item: "Blog",
                links: "link-E"
              },
            ]
          },
          {
            title: "About Us",
            content: [ 
              {
                item:"About Sofbox",
               links: "Link-F",
              },
              { 
                item:"RoadMap",
                links:"Link-G",
              },
              {
                item: "How it works",
                links: "link-H"
              },
              {
                item: "Team",
                links: "link-I"
              },
              {
                item: "News",
                links: "link-J"
              },
            ]
          },
          {
            title: "Menu",
            content: [ 
              {
                item:"About Us",
               links: "Link-A",
              },
              { 
                item:"Theme",
                links:"Link-B",
              },
              {
                item: "Features",
                links: "link-C"
              },
              {
                item: "Pricing",
                links: "link-D"
              },
              {
                item: "Blog",
                links: "link-E"
              },
            ]
          },
        ] 
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
        <div v-for="footerList in footerMenu" class="col-3">
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
  .col-3 {
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