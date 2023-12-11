

const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
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
            console.log(index);
            console.log('mi stai cancellando')

            this.todoList.splice(index, 1);
        },

        addTodo() {

            console.log(this.newTodo);

            if (this.newTodo.trim() !== '') {

                this.todoList.push(this.newTodo);
                this.newTodo = '';
            }
        }
    }
}).mount('#app');