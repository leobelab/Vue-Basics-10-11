<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated} from 'vue'
import SinglePost from './SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) { //We can use lifecycle hooks on setup instead of mounted and updated
        //console.log(props.posts) PROPS IN SETUP
        //LIFECYCLE HOOKS. The onMounted, onUnMounted and onUpdated hooks inside the setup
        // onMounted(() => console.log('component mounted'))
        // onUnmounted(() => console.log('component unmounted'))
        // onUpdated(() => console.log('component updated')) //It happens when any kind data changes
    },
    // mounted() { The other way of using lifecycle hook
    //     console.log('mounted using options api')
    // }
}
</script>

<style>

</style>