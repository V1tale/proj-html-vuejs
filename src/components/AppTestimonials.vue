<script>
export default {
    name: "AppTestimonials",
    data() {
        return {
            testimonials: [
                {
                    img:"/img/26.jpeg",
                    name:"Julia Aan",
                    role: "COO Sofbox",
                    description: "Lei è quella brava che fa tutto",
                },
                {
                    img:"/img/27.jpeg",
                    name:"Mac Znder",
                    role: "Manager Sofbox",
                    description: "Lui è quello meno bravo che chiede consigli ogni cinque minuti",
                }
            ]
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
                <div class="row g-4">
                    <div v-for="person in testimonials" class="col-6">
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
                <div class="col-4">
                    <div class="box">
                        <img :src="'/img/19.jpg'" alt="">
                        <h3>Life lack meaning</h3>
                        <p class="text-secondary">Sailing takes me away where I've always heard it could be</p>
                        <div class="date">
                            <h5>28 November 2019</h5>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="box">
                        <img :src="'/img/18.jpg'" alt="">
                        <h3>Life lack meaning</h3>
                        <p class="text-secondary">Sailing takes me away where I've always heard it could be</p>
                        <div class="date">
                            <h5>28 November 2019</h5>
                        </div>
                    </div>
                </div>
                <div class="col-4">
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


    background: linear-gradient(#cfebf8 0, white 40%,);
    .bg-wave {
        background-image: url("/img/15.png");
        background-repeat: no-repeat;
    }
    .title {
        text-align: center;
        padding: 3rem 0;
    }
    .col-6 {
        position:relative;
        top:0;
        left:0;
        cursor:pointer;
    
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
        &:hover {
            
        }
    }
    &:hover::after {
        background-color: rgb(93, 93, 247)
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
}</style>