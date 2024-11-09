<template>
  <div class="post">
    <!-- 
    BEFORE REUSABLE COMPONENTS
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span> -->
    <router-link :to="{ name: 'Details', params: { id: post.id }}"> 
      <!-- We have acces to post.id beacause of props on script -->
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>

  </div> 
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })
        return { snippet }
    }
}
</script>

<style>

</style>