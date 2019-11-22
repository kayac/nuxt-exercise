<template>
  <h1 class="question">
    {{ question }}
  </h1>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .question {
  padding-bottom: 35px;
  color: white;
  font-size: 35px;
}
</style>
