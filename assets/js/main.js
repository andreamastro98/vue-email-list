const { createApp } = Vue

  createApp({
    data() {
      return {
        //variabili vue 3
        message: 'Hello Vue!',
      }
    },
    methods: {
        //funzioni vue 3
         attivaApi(){

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
         .then( (res) => {
            console.log( res.data.forms[0].name )
            // this.numRand = res.data
        } )
    }
        
    }
  }).mount('#app')
