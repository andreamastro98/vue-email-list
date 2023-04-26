const { createApp } = Vue

  createApp({
    data() {
      return {
        //variabili vue 3
        randomMail: []
      }
    },
    methods: {
        //funzioni vue 3
         attivaApi(){
        
          for(let i = 0; i < 10; i++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
              .then( (res) => {
              this.randomMail.push(res.data.response)
              } )
            }
            
    }
        
    }
  }).mount('#app')
