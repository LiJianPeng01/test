
const url = {
    host: "http://39.105.36.198:8000/analysis_charts/comanly/"
}
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main_top1'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '年销售额年度最高商品1'
    },
    grid: {

    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisLine: {
            lineStyle: {
                color: "#091022"
            }
        }
    },
    yAxis: {
        lineHeight: 26,
        type: 'value',
        data: [2000, 4000, 6000, 8000, 10000, 12000]
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = function () {
    myChart.resize();
}


getData();
function getData() {
    obj = { chart_num: 1 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            console.log(res);
        }
    });
}


//销售额增长率
var myChartRate = echarts.init(document.getElementById('growth_rate'));

// 指定图表的配置项和数据
option = {
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['销售额', '增长率']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '销售额',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '增长率',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChartRate.setOption(option);