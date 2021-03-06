import client from '~/plugins/contentful'

export const state = () => ({
  posts: null,
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
}

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntries({
        content_type: 'caseStudy',
      })
      if (response.items.length > 0) commit('updatePosts', response.items)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
