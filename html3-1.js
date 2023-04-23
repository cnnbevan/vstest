new Vue({
    el: '#app',
    data: {
        newQuotation: {},
    },
    methods: {
        saveQuotation() {
            // 保存新的报价数据并跳转到报价详情页面
            window.location.href = 'html3.html';
        },
    },
});
