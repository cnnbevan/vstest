new Vue({
    el: '#app',
    data: {
        categories: [
            { label: '钢结构主材料', value: 'main_materials' },
            { label: '板材系列', value: 'sheet_series' },
            { label: '高结构防火涂料、油漆、除锈', value: 'paints' },
            { label: '螺栓零件', value: 'bolts' },
            { label: '运输、安装、吊装', value: 'transportation' },
            { label: '税费', value: 'taxes' },
        ],
        types: [
            { label: '类型1', value: 'type1' },
            { label: '类型2', value: 'type2' },
            { label: '类型3', value: 'type3' },
            { label: '类型4', value: 'type4' },
        ],
        tableData: [
            // 示例数据，请根据实际情况添加
            { category: 'main_materials', type: 'type1' },
            { category: 'sheet_series', type: 'type2' },
            { category: 'paints', type: 'type3' },
            { category: 'bolts', type: 'type4' },
            { category: 'transportation', type: 'type1' },
            { category: 'taxes', type: 'type2' },
            { category: 'main_materials', type: 'type3' },
            { category: 'sheet_series', type: 'type4' },
        ],
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
});
