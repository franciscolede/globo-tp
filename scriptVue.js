const app = Vue.createApp({
    data() {
      return {

        btnSeguir: "Seguir",
        btnLike: "Me gusta",
        likes: "74999999",
        username: "",

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
            date: "4 meses",
            image1: "assets/images/messi3.webp",
            image2: "assets/images/messi4.webp",
            image3: "assets/images/messi2.webp",
            image4: "assets/images/messi1.webp",
        },

        coments: {

        }
        

      }
    },
    methods:{
        follow() {
            const btn = this.$refs.refBtnFollow
            const inputUser = this.$refs.refInputUser
            const error = this.$refs.refUserError
            if (this.username !== "") {   
                
                if (this.btnSeguir == "Seguir"){

                    this.btnSeguir = "Dejar de seguir"

                    btn.classList.remove('btnBlue')
                    btn.classList.add('unfollow')
                }
                else if (this.btnSeguir == "Dejar de seguir"){
                    this.btnSeguir = "Seguir"

                    btn.classList.remove('unfollow')
                    btn.classList.add('btnBlue')
                }
            }
            else{
                inputUser.focus()
                error.classList.remove('display-off')
                error.classList.add('display-on')
            }
        },

        submitUser() {
            const error = this.$refs.refUserError
            const inputUser = this.$refs.refInputUser
            if (this.username !== ""){
                error.classList.remove('display-on')
                error.classList.add('display-off')

                const form = this.$refs.refFormUser
                form.classList.add('display-off')
                
                const usershow = this.$refs.refUserShow
                usershow.classList.remove('display-off')
                usershow.classList.add('display-on')
            }
            else{
                
                error.classList.remove('display-off')
                error.classList.add('display-on')
                inputUser.focus()
            }
        }
    },
})

app.mount("#app");