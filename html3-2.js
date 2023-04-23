new Vue({
    el: '#app',
    data: {
        editQuotation: {},
    },
    methods: {
        saveQuotation() {
            // 保存修改的报价数据并跳转到报价详情页面
            window.location.href = 'html3.html';
        },
    },
});
