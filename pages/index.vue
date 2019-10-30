<!-- TODO: this is the page where the user starts the quiz -->
<template>
  <section class="container">
    <div>
      <h1 class="title">
        神奈川に似会う町はどでれでしょうか？
      </h1>
    </div>
    <div>
      <button class="quiz-button" @click="$router.push('/Questions/One')">
        <p class="button-label">
          Start Quiz
        </p>
      </button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~assets/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  flex-wrap: wrap;
  flex-direction: column;
}

.title {
  font-family: 'Lexend Deca', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: black;
  letter-spacing: 1px;
  margin-right: 43vw;
  margin-left: 5vw;
  margin-bottom: 30vh;
}

.quiz-button {
  background-color: #CF835B;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10vh;
}

.button-label {
  color: white;
  font-size: 20px;
  font-family: 'Lexend Deca', sans-serif;
}

@media screen and (max-width: 760px) {

  .title {
  font-family: 'Lexend Deca', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: black;
  margin-left: 5vh;
  margin-right: 5vh;
  }
}

</style>
