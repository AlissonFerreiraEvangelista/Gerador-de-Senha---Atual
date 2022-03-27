var app = new Vue({
  el:'#app',
    data:{
      password:'',
      listaSalva:[],
      aplicativo:{},
      podeExibirLista:false,
      podeExibirDetalhes:false,
      podeExibirformulario:false, 
      
    },
      created: function(){
        this.listarTodos();
        this.exibirLista();
      },
    methods:{
      exibirLista: function(){
        this.podeExibirLista=true;
        this.podeExibirDetalhes=false;
        this.podeExibirformulario=false;
      },
      exibirFormulario: function(){
        this.podeExibirLista=false;
        this.podeExibirDetalhes=true;
        this.podeExibirformulario=false;
      },
      exibirDetalhes: function(){
        this.podeExibirLista=false;
        this.podeExibirDetalhes=false;
        this.podeExibirformulario=true;
      },
      novoPassword: function(){
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        var passwordLength = 16;
        var password = "";

        for (var i = 0; i < passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * chars.length);
          password += chars.substring(randomNumber, randomNumber + 1);
        }
        this.password = password;
      }, 
        copiar: async function(){
          try {
            await navigator.clipboard.writeText(this.password);    
          }catch($e) {
            
          }
        },     
          listarTodos: function(){
            fetch('http:/localhost:8080/')
              .then((resposta)=> resposta.json())
              .then((objetoJson)=>{
                this.listaSalva = objetoJson;
               })
          },
          salvar:function(){
            const headers = new Headers({'Content-type': 'application/json'});
            fetch('http:/localhost:8080/cadastro',
              {
                method:'POST',
                headers,
                body: JSON.stringify(this.aplicativo),
              }
            )     
            .then((resposta)=>resposta.json())
            .then((objetoJson)=>{
              this.listarTodos();
              this.aplicativo = { };
              this.exibirLista();
            });
          },
          lerDetalhes:function(id){
            this.aplicativo = this.listaSalva.find( item=>item.id == id);
           
           /* fetch('http:/localhost:8080/detalhes/' + id)
            .then((resposta)=>resposta.json())
            .then((objetoJson)=>{
              console.log(objetoJson);
              this.aplicativo = objetoJson;
            })
            */
          },
          deletar:function(id){
            fetch('http:/localhost:8080/deletar/' + id)
            .then(()=>{
              this.listarTodos();
              this.aplicativo = {};
            })
          },
          criarNovo: function(){
            this.aplicativo = { };
            this.exibirFormulario();
          },
          detalhes: function(id){
            this.lerDetalhes(id);
            this.exibirDetalhes();
          },
          editar:function(id){
            this.lerDetalhes(id);
            this.exibirFormulario();
          },
          
          

    }
})
var app2 = new Vue({
  el:'#app2',
  data:{
    teste:'',
  },
  methods:{
    pass:function(){
      if(input.type === "password"){
        input.type ="text";

        classLis.remove("fa-eye-slash");
        classLis.add("fa-eye");

        setTimeout(( )=>{
          lock.getElementstByClassName.Color = "#111625";
        }, 500)
      }
    }
  }
})
    
 
 