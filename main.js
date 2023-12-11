

const { createApp } = Vue;

createApp({
    data() {
        return {
            newKey: '',
            pageTitle: 'my to do list in vue.js ',
            todoList: [
                'fare la spesa',
                'tagliare la barba',
                'comprare regali'
            ],

        }
    },
    methods: {
        deleteTodo(index) {
            console.log('elimina')
            this.todoList.splice(index, 1)
        },

        addTodo() {
            console.log('add')
            if (this.newKey !== '') {
                this.todoList.push(this.newKey)
            }
        }
    }

}).mount('#app');