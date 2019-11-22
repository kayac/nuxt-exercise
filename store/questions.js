export const state = () => ({
  all: [
    {
      id: '1',
      question: 'Q1.あまり人に構われたくない方だ',
      answer: true
    },
    {
      id: '2',
      question: 'Q2.食べ物の好き嫌いは多い方だ?',
      answer: false
    },
    {
      id: '3',
      question: 'Q3.住むなら戸建てよりマンションだ?',
      answer: false
    }
  ]

  actions= {
    updateAnswer({ commit }, payload) {
      commit('UPDATE_ANSWER', payload)
    }
  },

  mutations = {
    UPDATE_ANSWER(state, payload) {
      state[payload.id] = payload.answer
    }
  },

  getters= {
    score: state => {
      const correctAnswers = answers.filter(answer => answer)
    return correctAnswers / state.questions.length
  }
}
