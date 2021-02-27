app.component('task-images-item',{
    props:{
        tasks: {
            type: Array,
            require: true
        }
    },
    emits:["toggle-like","toggle-show"]
    ,
    template: 
    /*html*/
    `
    <div v-for="(item, index) in tasks" :key="index"
                :class="[item.show ? 'hidden' : 'flex flex-col justify-center items-center w-full mt-5']" v-if="tasks.length > 0">
                <div class="w-2/12 text-gray-700 font-san flex flex-col justify-center items-center">
                    <div class="w-full flex flex-col justify-center items-center">
                        <img v-bind:src="item.src" alt="image" @click="toggleShow(index)" class="w-full cursor-pointer">
                    </div>
                </div>
                
                <div class="flex flex-col items-center">
                    <button
                        class="bg-pink-400 text-white flex justify-center items-center font-semibold px-3 mt-2 rounded-md focus:outline-none" v-on:click="toggleLike(index)">
                        LIKE
                        <span class="material-icons text-white text-xl ml-1" v-show="item.like">favorite</span>
                        <span class="material-icons text-white text-xl ml-1" v-show="!item.like">favorite_border</span>
                    </button> 
                    <p class="p-3 my-auto text-sm"> {{item.detail}}</p>
                 </div>
                 
    </div>
    <div class="w-full text-gray-700 font-san flex flex justify-center items-center mx-auto" v-else>
                <p class="p-5 text-5xl font-bold mt-10 text-gray-300">NOT FOUND!!</p>
    </div>
    `,
    methods: {
        toggleLike(index) {
            this.$emit('toggle-like',index)
        },
        toggleShow(index){
            this.$emit('toggle-show',index)
        }
    }
})