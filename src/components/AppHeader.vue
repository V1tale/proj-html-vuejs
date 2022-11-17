<script>

export default {
  name: "AppHeader",
    data() {
      return {
        
      }
    }

}
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between">
      <div id="logo">
      </div>
      <div id="menu" class="d-flex justify-content-between">
        <div class="list">

        </div>
        <div class="buttons">

        </div>

      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
    height: 50px;
    background-color: red;
}
#logo {
    width:100px;
    height:50px;
    background-color: blue;
}
#menu {
  width: 300px;
  height: 50px;
  background-color: gray;
  padding: 5px;
  .list {
    width: 150px;
    height: 100%;
    background-color: lightgray;
  }
  .buttons {
    width:150px; 
    height: 100%;
    background-color: black;
  }
}

</style>