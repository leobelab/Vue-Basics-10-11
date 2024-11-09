import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null) //if there's an error with the request

    //We are going to be using async and await to do this
    const load = async () => {
      try {///try to fetch the data if not catch will catch the error and do something with it
        let data = await fetch('http://localhost:3000/posts/' + id) //it performs the fetch and instead of going to the next line of code it await the fetch to be completed, Once it's completed, the response is stored in data
        //console.log(data)
        if (!data.ok) {
          throw Error('that post does not exist')
        }
        post.value = await data.json()
      }
      catch(err){
        error.value = err.message
        //console.log(error.value)
      }      
    }

    return { post, error, load}
}

export default getPost
