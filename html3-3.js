new Vue({
    el: '#app',
    data: {
        quotationHistory: [
            // 填充历史版本数据
            {id: 1, category: '钢构件主材', type: 'H型钢', material: '钢材', spec: 'H型钢', brand: '品牌A', amount: 100, unit: '吨', price: 4500, area: 2000, requirement: '无', subTotal: 450000},
            {id: 2, category: '板材系列', type: '钢结构屋面板', material: '屋面板', spec: '规格B', brand: '品牌B', amount: 200, unit: '平方米', price: 100, area: 2000, requirement: '无', subTotal: 20000},
            {id: 3, category: '螺栓和配件', type: '螺栓', material: '螺栓A', spec: '型号A', brand: '品牌C', amount: 5000, unit: '个', price: 2, area: 2000, requirement: '无', subTotal: 10000},
            {id: 4, category: '防火涂料', type: '油漆', material: '涂料A', spec: '型号A', brand: '品牌D', amount: 2000, unit: '升', price: 30, area: 2000, requirement: '无', subTotal: 60000},
            {id: 5, category: '运输', type: '主件运输费', material: '主件运输', spec: '-', brand: '-', amount: 100, unit: '吨', price: 100, area: 2000, requirement: '无', subTotal: 10000}
        ],
    },
    methods: {
        viewQuotationDetails() {
            // 查看报价详情
        },
        restoreQuotation() {
            // 恢复报价数据并跳转到报价详情页面
            window.location.href = 'html3.html';
        },
    },
});
