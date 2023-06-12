const app = Vue.createApp({
    data() {
      return {

        btnSeguir: "Seguir",
        btnSeguirColor: true,

        btnLike: "Me gusta",
        btnLikeColor: true,
        likes: 74999999,

        username: "",
        usernameCheck: false,
        
        comentArray: [],
        comentText: "",

        errorVacio: "Debes ingresar UN TEXTO para poder comentar",


        vision:{
            userForm: true,
            error: false,
            user: false,
            comentError: false,
        },

        user:{
            image: "assets/images/leo-beso.webp",
            alt: "Foto de perfil",
            
            name: "Leo Messi",
            mail: "ankara1987@gmail.com",
            date: "24/06/1987",
            tel: "18122022",
            city: "Rosario, Santa Fé",
            job: "Inter de Miami",
        },

        post: {
            date: "6 meses",
            image1: "assets/images/messi3.webp",
            image2: "assets/images/messi4.webp",
            image3: "assets/images/messi2.webp",
            image4: "assets/images/messi1.webp",
        },

        
        
        
    }
},
methods:{
        submitUser() {
            if (this.username !== ""){
                this.vision.error = false
        
                this.vision.userForm = false
                
                this.vision.user = true
                this.usernameCheck = true
            }
            else{
                
                this.vision.error = true
                inputUser.focus()
            }
        },
        
        follow() {
            if (this.usernameCheck == true) {   
                
                if (this.btnSeguir == "Seguir"){
                    this.btnSeguir = "Dejar de seguir"

                    this.btnSeguirColor = false
                }
                else if (this.btnSeguir == "Dejar de seguir"){
                    this.btnSeguir = "Seguir"

                    this.btnSeguirColor = true
                }
            }
            else{
                inputUser.focus()
                this.vision.error = true
            }
        },

        like(){
            if(this.usernameCheck == true){

                if (this.btnLikeColor == true){
                    this.likes += 1
                    this.btnLikeColor = false
                    this.btnLike = "No me gusta"
                }
                else {
                    this.likes -= 1
                    this.btnLikeColor = true
                    this.btnLike = "Me gusta"
                }
            }
            else{
                inputUser.focus()
                this.vision.error = true
            }
        },

        coment(){
            if(this.usernameCheck == true){
                if (this.comentText !== ""){
                    this.comentArray.push(this.comentText)
                    this.comentText = ""
                    this.vision.comentError = false
                    
                }
                else{
                    this.vision.comentError = true
                }
            }
            else{
                inputUser.focus()
                this.vision.error = true
            }
        },

        eliminar(index){
            this.comentArray.splice(index, 1)
        },

    },
})

app.mount("#app");