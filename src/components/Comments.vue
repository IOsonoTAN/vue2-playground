<template>
  <div id="comments">
    <h1>Comments</h1>
    <button @click="getComments()">Load comment</button>
    <button @click="removeComments()">Remove all comments</button>
    <div class="row" v-for="comment in comments">
      <h4>[{{ comment.id }}] {{ comment.name }}</h4>
      <p>{{ comment.body }}</p>
      <div class="email">{{ comment.email }}</div>
      <button @click="removeComment(comment)">Remove comment</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    getComments() {
      this.$store.dispatch('getComments')
    },
    removeComments() {
      this.$store.dispatch('removeComments')
    },
    removeComment(comment) {
      this.$store.dispatch('removeComment', comment)
    }
  },
  computed: {
    ...mapGetters({
      comments: 'comments'
    })
  }
}
</script>