app.component('task-images',{
    props:{
        tasks: {
            type: Array,
            require: true
        }
    },
    template: 
    /*html*/
    `

    <div v-for="(item, index) in tasks" :key="index">
                <div class="relative w-full text-gray-700 font-san flex flex-col justify-center items-center" v-show="item.show">
                    <div class="relative w-3/12 flex flex-col justify-center items-center mt-10">
                        <img v-bind:src="item.src" alt="image" class="w-full bg-black rounded-full cursor-default">
                        <span class="absolute material-icons cursor-pointer font-bold right-0 top-0"
                            @click="toggleShow(index)">close
                        </span>
                    </div>
                    <span class="absolute material-icons cursor-pointer font-bold text-3xl right-52" @click="toggleShow(index+1)" >
                        navigate_next
                    </span>
                    <span class="absolute material-icons cursor-pointer font-bold text-3xl left-52" @click="toggleShow(index-1)">
                        navigate_before
                    </span>
                </div>
    </div>
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
        }
    }
})