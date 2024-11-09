<template>
  <div class="home">
    <p>Home</p>
    <!-- before --- <p ref="para">My name is {{ name }} and my age is {{ age }}</p>-->
    <!-- before --- <p ref='para'>My name is ... -->
    <!-- before --- <button @click="handleClick">click me</button> -->
    <!-- before --- <button @click="age++">add 1 to age</button> -->
    <!-- before --- <input type="text" v-model="name"> -->
    <!-- <h2>Refs</h2>
    <p>{{ leoOne.name }} - {{ leoOne.age }}</p>
    <button @click="updateLeoOne">Update leo one</button>
    <h2>Reactive</h2>
    <p>{{ leoTwo.name }} - {{ leoTwo.age }}</p>
    <button @click="updateLeoTwo">Update leo two</button> -->
    <!-- <p>{{ name }}</p> -->
     <!-- <input type="text" v-model="search">
     <p>search term - {{ search }}</p>
     <div v-for="name in matchingNames" :key="name">{{ name }}</div>
     <button @click="handleClick">stop watching</button> -->
     <!-- <PostList :posts="posts" /> -->
      <!-- LIFECYCLE HOOKS PART-->
      <!-- <PostList v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts" >toogle posts</button> To show on console onUnmounted lifecycle hook
      <button @click="posts.pop()">delete a post</button> To show on console onUpdated lifecycle hook -->
      <!-- FETCHING DATA IN SETUP -->
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else>Loading...</div>
  </div><!-- on the template we don't use .value-->
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'
//For Reusable composable functions
import getPosts from '../composables/getPosts'
// import { computed, ref, watch, watchEffect} from 'vue'
// import { ref} from 'vue'


export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    //Data were reactive so we will have to make them (we'll see it later)
    // ---------- SETUP ---------------Will run before everything mounted or created
    //"this" key word is not available inside the set up. 
    //Here is undefined so it not refers to the component itself
    // --- console.log(this) //we see undefined inspecting. 
    //We have a ------ ref ------- but is not related to <p>My name is...
    // --- const para = ref(null) 
    //We can't change this value before linking it
    // --- console.log('setup')
    //Inside here we can write what js code we want
    // first --- let name = 'mario'
    // first --- let age = 30 
    // after --- let name = ref('mario')
    // after --- let age = ref(30) 
    //Now it's reactive and we can output it on template and do it without .value (it directly does it)
    //We only have to update them putting name.value on our handleClick
    // --- const handleClick = () => {
    //   --- console.log('you clicked me')
    //   --- console.log(para, para.value)//it shows us My name is ...
    //   --- para.value.classList.add('test')
    //   --- para.value.textContent = 'hello, leos'
    //We cannot update one value as name here because is not reactive
    //Inside data() are reactive but not here so we need to do something, using 
    //refs to create reactive values, not refs on the template as before OR reactive vue class
    //   --- name.value = 'luigi'
    //   --- age.value = 35
    // --- }
    // ----------- USING reactive vue library --------------
    
    // --- const leoOne = ref({ name: 'mario', age: 30 })
    // --- const leoTwo = reactive({ name: 'luigi', age: 35 })
    //On just writting const nameTwo = reactive('luigi') will not be updating template value
    //we can't use .value and without it we can't neither because we don't have a name: 
    //So there's no much difference between one way and another but we can 
    //summarize it as with refs we have always to access with .value 
    //and with reactive() we can't use primitives  X const nameTwo = reactive('luigi')
    // --- const updateLeoOne = () => {
      // --- leoOne.value.age = 40
    // --- }

    // --- const updateLeoTwo = () => {
      // --- leoTwo.age = 45 
      //major differencies is that using refs we have to acces.value and with reactive we don't
      //we can use rimitive values inside reactive
    // --- }

    // --- return { leoOne, updateLeoOne, leoTwo, updateLeoTwo}    

    //-------------------------- USING COMPUTED VALUES ---------------------------
    //Using computed function to return a value
    //The idea of a computed proprety is not to return a simple value, 
    //but to compute a new value based on other values
    // const name = computed(()=> {
    //   return 'shaun'
    // })
    // const search = ref('')
    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'browser', 'koopa', 'peech'])
    
    // const stopwatch = watch(search, () => {
    //   //Every time we type something different on search watch will know 
    //   //and will have the power to do something
    //   console.log('watch function ran')
    // })
    // //watchEffect is most used to run the function only when value changes
    // const stopEffect = watchEffect(() => {
    //   //This run initially when the setup functions first run, whatch doesn't do that
    //   console.log('watchEffect function ran', search.value)
    // })

    // const matchingNames = computed(()=>{
    //   return names.value.filter((name)=>name.includes(search.value))
    // })

    // const handleClick = () => {
    //   stopwatch()
    //   stopEffect()
    // }

    // return { names, search, matchingNames, handleClick}

    //LESSON 11 -/- Using props in setup (sharing props as normal between components), 
    //          -/- Lifecycle Hooks
    //          -/- Fetching data in setup
    // const posts = ref ([
    //   { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.', id: 1 },
    //   { title: 'top 5 CSS tips', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, ducimus a reiciendis veniam, culpa praesentium excepturi laboriosam optio itaque asperiores ea adipisci magni accusamus officia impedit sint dicta neque.', id: 2 },
    // ])

    // const showPosts = ref(true) //To see on Console onUnmounted LIFECYCLE HOOK

    // return { posts, showPosts }
    // FETCHING DATA IN SETUP WITH DB.JSON and running json-server --watch data/db.json
    // How we can use asyncronous code to fetch data inside the setup function 
    // const posts = ref([])
    // const error = ref(null) //if there's an error with the request

    // //We are going to be using async and await to do this
    // const load = async () => {
    //   try {///try to fetch the data if not catch will catch the error and do something with it
    //     let data = await fetch('http://localhost:3000/posts') //it performs the fetch and instead of going to the next line of code it await the fetch to be completed, Once it's completed, the response is stored in data
    //     //console.log(data)
    //     if (!data.ok) {
    //       throw Error('no data available')
    //     }
    //     posts.value = await data.json()
    //   }
    //   catch(err){
    //     error.value = err.message
    //     //console.log(error.value)
    //   }      
    // }

    // load()

    // return { posts, error }

    // REUSABLE COMPOSABLE FUNCTIONS
    //Externalitze all logic in a single file and import and use it wherever we want. Invoking the function inside the setup of each component
    //To create these external funcions we call it composable or composition functions.
    const { posts, error, load } = getPosts()

    load()//we call load and posts and error will have a value

    return { posts, error}


  }
}
</script>
