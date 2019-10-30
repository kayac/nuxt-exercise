<template>
  <div class="container">
    <div>
      <h1 class="question">
        Q2.食べ物の好き嫌いは多い方だ?
      </h1>
      <div class="button-container">
        <button class="quiz-button">
          <nuxt-link class="button-label" :to="{name: 'Questions-Three', params: { answer1, answer2: 'Yes' }}">
            <p>
              Yes
            </p>
          </nuxt-link>
        </button>
        <button class="quiz-button">
          <nuxt-link class="button-label" :to="{name: 'Questions-Three', params: { answer1, answer2: 'No' }}">
            <p>
              No
            </p>
          </nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer1: ''
    }
  },
  created() {
    this.answer1 = this.$route.params.answer1
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #388A8A;
}

.title {
  font-family: 'Lexend Deca', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
}

.quiz-button {
  background-color: #CF835B;
  border-radius: 12px;
  padding: 15px;
  text-decoration: none;
}

.button-label {
  color: white;
  font-size: 20px;
  font-family: 'Lexend Deca', sans-serif;
  text-decoration: none;
  text-underline-position: none;
}

</style>
