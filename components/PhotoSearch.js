app.component('task-search',{
    props:{
        like: Number,
    },
    emits:["add-text"]
    ,
    data(){
        return {
            newText:'',
            search: false
        }
    },
    template: 
    /*html*/
    `
    <div class="relative flex items-center">
        <p class="font-extrabold text-lg">Pokédex Gallery | LIKE : {{ like }} </p>
        <div class="absolute right-0  flex items-center">
             <div class="" v-show="search">
                <input type="text" placeholder=" Enter for search" v-model="newText" class=" m-3 py-2 px-2 mt-5 font-san border-2 border-gray-300 rounded-md right-0">
                    <span class="p-2 text-white font-bold  mr-2 bg-red-400 rounded-md cursor-pointer" @click="newText = ''">Cancel</span>
                    </div>
                    <span class="material-icons text-3xl text-pink-400 cursor-pointer" @click="toggleSearch">
                        search
                    </span>
            </div>
    </div>
    `,
    methods: {
        toggleSearch(){
            this.search = !this.search
        }
    },
    watch:{
        newText: function(text){
            this.newText = text
            this.$root.searchText = this.newText
        } 
    }

})