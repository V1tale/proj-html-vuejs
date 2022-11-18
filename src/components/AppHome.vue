<script>
export default {
    name:"AppHome",
    data() {
        return {
          benefits: {
              img: "/img/24.png",
              title: "Online Marketing",
              description: "it is a long established fact that a reader will be distracted",
              list: ["SEO", "SEM", "Website Strategy", "Social Management"]
            }
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
            <p class="text-secondary">There are many variations of passages of Lorem Ipsus available, but the majority have suffered alteration in some form</p>
            <button type="button" class="btn btn-primary">Read More</button>
        </div>
        <div class="col-6 picture">
            <img :src="'/img/27-1.png'" alt="">
        </div>
      </div>
      <div class="benefit row">
        <div class="col-4">
          <div class="box d-flex align-items-start">
            <div class="left ">
              <img :src="benefits.img" alt="">
            </div>
            <div class="right">
                <h3>{{benefits.title}}</h3>
                <p class="text-secondary">{{benefits.description}}</p>
                <ul>
                  <li v-for="item in benefits.list"><i class="fa-solid fa-check"></i> {{item}}</li>
                </ul>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="box d-flex align-items-start">
            <div class="left ">
              <img :src="benefits.img" alt="">
            </div>
            <div class="right">
                <h3>{{benefits.title}}</h3>
                <p class="text-secondary">{{benefits.description}}</p>
                <ul>
                  <li v-for="item in benefits.list"><i class="fa-solid fa-check"></i> {{item}}</li>
                </ul>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="box d-flex align-items-start">
            <div class="left ">
              <img :src="benefits.img" alt="">
            </div>
            <div class="right">
                <h3>{{benefits.title}}</h3>
                <p class="text-secondary">{{benefits.description}}</p>
                <ul>
                  <li v-for="item in benefits.list"><i class="fa-solid fa-check"></i> {{item}}</li>
                </ul>
            </div>
          </div>
        </div>
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
    height:350px;
    border-radius: 10px;
  }
  .box img {
      width:70px;
    }
    ul {
      padding:0;
      font-size: 1rem;
      i {
        color:rgb(93, 93, 247)
      }
    }
  .tricks .col-6 {
    height: 250px; 
    border: 2px solid green;
  }
  .benefit {
    margin: 3rem;
  }
}</style>