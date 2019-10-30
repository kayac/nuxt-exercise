
<template>
  <div class="container">
    <div>
      <h1 class="question">
        Q1.あまり人に構われたくない方だ?
      </h1>
      <div class="button-container">
        <button class="quiz-button">
          <nuxt-link class="button-label" :to="{name: 'Questions-Two', params: { answer1: 'Yes' }}">
            <p>
            Yes
          </p>
        </nuxt-link>
        </button>
          <button class="quiz-button">
          <nuxt-link class="button-label" :to="{name: 'Questions-Two', params: { answer1: 'No' }}">
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
    }
  }
}
</script>

<style>
  .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #388A8A;
}

.question {
  padding-bottom: 35px;
  color: white;
  font-size: 35px;
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
  width: 100px;
  text-decoration: none;
}

.quiz-button:hover {
  background-color: #C9764B;
  width: 102px;
}

.button-container {
  display: flex;
  justify-content: space-around;
}

.button-label {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Lexend Deca', sans-serif;
}
</style>
