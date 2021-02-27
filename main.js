const app = Vue.createApp({
    data() {
        return {
            tasks: [
            {src:'./images/001.png', 
            detail: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.',
            name: 'Bulbasaur',  
            like: false,
            show: false},

            {src:'./images/004.png', 
            detail: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I.', 
            name: 'Charmander', 
            like: false,
            show: false},

            {src:'./images/007.png', 
            detail: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I.', 
            name: 'Squirtle', 
            like: false,
            show: false}
                    ],
            searchText : ''
        }
    },
    methods: {
        toggleLike(index){
            this.filterText[index].like = !this.filterText[index].like
        },
        toggleShow(index){
            if(index > this.filterText.length-1){
                index = 0;
            }else if(index < 0){
                index = this.filterText.length-1;
            }
            for (let i = 0; i < this.filterText.length; i++) {
                if(i === index){
                    this.filterText[i].show =  !this.filterText[i].show
                }else{
                    this.filterText[i].show =  false
                }
            }
        }
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.like ).length
        },
        filterText(){ // this return Object
            return this.tasks.filter( d => {
                return d.name.toLowerCase().includes(this.searchText.toLowerCase()) // filter by name object, if searchText contained in object it reture ture
            })
        },
    }
})
