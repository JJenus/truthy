Vue.component("reviews", {
  
})

var app = new Vue({
  el: "#app", 
  data: {
    reviews: {} 
  }, 
  mounted(){
    this.getReviews();
  }, 
  
  methods: {
    getReviews(){
      $.ajax({
        method: "get", 
        url: "server/app.php", 
        data: {reset:true}, 
        success: (res)=>{
          this.reviews = res;
          console.log(res);
        }, 
        error: (err)=>{
          console.error(err);
        } 
      });
    }, 
    num(s){
      return Number(s);
    } 
  } 
});