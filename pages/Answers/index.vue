<template>
  <div class="container">
    <div>
      <h1 class="answer">
        町のおすすめは：
      </h1>
      <div class="city-image">
        <img :src="require(`@/assets/` + share.image)" class="image" />
      </div>
      <h2 class="result">
        {{ final.rank }}
        {{ share.city }}
      </h2>
    </div>
    <button class="quiz-button">
      <nuxt-link class="button-label" :to="{name: 'index'}">
        <p>
          Start Again?
        </p>
      </nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer1: '',
      answer2: '',
      answer3: ''
  },
  created() {
    this.answer1 = this.$route.params.answer1
    this.answer2 = this.$route.params.answer2
    this.answer3 = this.$route.params.answer3
    this.determineResult()
    this.selection = this.final.rank
    this.sharableresult()
    this.og = this.share
  },
  methods: {
    determineResult() {
      for (let i = 0; i < this.potentialResult.length; i++) {
        if (this.potentialResult[i].result1 !== this.answer1) continue
        if (this.potentialResult[i].result2 !== this.answer2) continue
        if (this.potentialResult[i].result3 !== this.answer3) continue

        this.final = this.potentialResult[i]
        break
      }
    },
    sharableresult() {
      for (let i = 0; i < this.sharable.length; i++) {
        if (this.sharable[i].rank === this.selection) {
          this.share = this.sharable[i]
        }
      }
    }
  },
  head() {
    return {
      title: this.share.city,
      meta: [
        { name: 'og:title', content: this.share.city },
        { name: 'og:image', content: require('@/assets/' + this.share.image) },
        { name: 'og:description', content: 'What city suits you best?' }
      ]
    }
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
  flex-direction: column;
  text-align: center;
  background-color: #388A8A;
}

.city-image{
  max-width: 1000px;
  max-height: 600px;
}

.image{
  object-fit: cover;
  height: 600px;
  width:1000px;
}

.answer {
  padding-bottom: 35px;
  color: white;
  font-size: 35px;
}

.result {
  color: white;
  font-size: 45px;
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
}

@media screen and (max-width: 760px) {

  .city-image{
  max-width: 600px;
  max-height: auto;
  }
  .image {
  height: auto;
  width:400px;
  }
}
</style>
