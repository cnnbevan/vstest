new Vue({
    el: '#app',
    data: {
        status: 'success',
        todos: [
            { name: '待办事项1', dueDate: '2023-05-01' },
            { name: '待办事项2', dueDate: '2023-05-10' },
            { name: '待办事项3', dueDate: '2023-05-15' },
            { name: '待办事项4', dueDate: '2023-05-20' },
            { name: '待办事项5', dueDate: '2023-05-25' }
        ]
    },
    methods: {
        handle(row) {
            alert(`处理事项：${row.name}`);
        }
    }
});
