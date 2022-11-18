<script>
export default {
    name:"AppFeatures",
    data() {
        return {
            features: [
                {
                    img: "/img/60.png",
                    title: "Customized Invoices",
                },
                {
                    img: "/img/48.png",
                    title: "Stock Management",
                },
                {
                    img: "/img/68.png",
                    title: "Receivable & Payable",
                },
                {
                    img: "/img/33.png",
                    title: "MAnage Buying",
                },
                {
                    img: "/img/55.png",
                    title: "Powerful & Secure",
                },
                {
                    img: "/img/68.png",
                    title: "Fastest Return Filing",
                },
                {
                    img: "/img/39.png",
                    title: "Monthly Detailed",
                },
                {
                    img: "/img/87.png",
                    title: "Product Management",
                }
            ]
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
            <div v-for="cards in features" class="col-3">
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
  & .title {
    padding-right: 2rem;
  }
  & .button {
    width:50%;
    height: 80px;
    background-color: orange;
  }
  .grid .box {
    img {
        width:50px;
    }
    h3 {
        font-size: 1rem;
    }
  }
}</style>