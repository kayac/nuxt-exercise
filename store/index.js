export const state = () => ({
  count: 2
})

export const mutations = {
  increment(state) {
    if (state.count < 4) {
      state.count++
    }
  }
}
