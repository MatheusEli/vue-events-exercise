const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    add(num){
      this.counter += num;
    },

    sub(num){
      if(this.counter > 0){
        this.counter -= num;
      }
    },

    setName(event){
      this.name = event.target.value;
    },

    submitForm(){
      alert('Submitted!');
    },

    confirmInput(){
      this.confirmedName = this.name;
    },

    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
