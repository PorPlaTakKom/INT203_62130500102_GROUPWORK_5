app.component('task-images-view',{
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
    `,
    methods: {
        toggleShow(index){
            this.$emit('toggle-show',index)
        }
    }
})