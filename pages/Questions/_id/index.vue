
<template>
  <div class="container">
    <div>
      <Question
        :id= question.id
        :question= question.question
      />
      <p>{{ question.id }}</p>
      <p> Counter: "{{ counter }}" </p>
      </button>
      <div class="button-container">
        <button class="quiz-button">
          <nuxt-link class="button-label" @click.native= "increment" :to="{name: 'Questions-id', params: { answer1: 'Yes', id: counter.toString() }}">
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
import Question from '@/components/Questions/Question'

export default {
  components: {
    Question: Question
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    question() {
      return this.$store.state.questions.all.find(question => question.id === this.id)
    },
    counter() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      if (this.$store.state.count <= 4) {
        this.$store.commit('increment')
      }
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
