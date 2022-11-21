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
            },
            tricks: [
              {
                img: "/img/510.png",
                title: "Reporting Analysis",
                description: "Everybody's workin' for the weekend. Everybody wants a new romance"
              },
              {
                img: "/img/511.png",
                title: "Technical SEO Adult",
                description: "Everybody's going off the deep end. Everybody needs a second chance"
              }
            ]
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
        <div class="col-6">
          <h3>Get tips tricks on how to skyrocket your sales</h3>
          <p class="text-secondary">Enjoy the world and everything within it</p>
          <div v-for="cards in tricks" class="s-cards d-flex align-items-start">
            <img :src="cards.img" alt="">
            <div class="card-description">
              <h4>{{cards.title}}</h4>
              <p class="text-secondary">{{cards.description}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img :src="'/img/509.jpeg'" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#home {
  scroll-margin:var(--header-height);
  padding: var(--header-height);
    & .picture {
      height:250px;
      img {
        width:100%;
        max-height: 370px;
    }

  }
  .jumbo {
    background-color: #f2f7ff;
    padding: 20px;
    height:350px;
    border-radius: 10px;
    margin-bottom:4rem;
  }
    ul {
      padding:0;
      font-size: 1rem;
      i {
        color:var(--main-color)
      }
    }
  .tricks .col-6 {
    img {
      width:100%;
    }
    .s-cards {
      margin: 1.6rem 0;
      &:hover {
        transform: scale(1.1);
        box-shadow: 1px 1px 10px black;
        h4 {
          color: var(--main-color);
        }
      }
    img {
      width:50px;

    }
  }

    .card-description {
      margin-left:10px;
      p {
        font-size: .8rem;
      }
    }
  }
  .benefit {
    margin: 3rem;
  }
}</style>