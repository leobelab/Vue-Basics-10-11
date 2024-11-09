<template>
    <!-- REUSABLE COMPOSABLES
     We want to fetch the data based on the id -->
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
</template>

<script>
import getPost from '../composables/getPost';

export default {
    props: ['id'],
    setup(props) {
        //Create composable function to fetch a single blog post using this id
        const { post, error, load } = getPost(props.id)

        load() //we invoke this load funtion to start the fetch

        return { post, error }
    }
}
</script>

<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre {
        white-space: pre-wrap;
    }
</style>