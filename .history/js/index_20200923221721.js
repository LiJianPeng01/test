
const url = {
    host: "http://39.105.36.198:8000/analysis_charts/comanly/"
}
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main_top1'));
// 指定图表的配置项和数据
var option = {
    color: ['#1f5a8a'],
    // 坐标指示器颜色
    tooltip: {
        trigger:"axis",
        backgroundColor:"#0bb8fa",
        textStyle: {
            color: '#fff'  // 图例文字颜色
        },
        formatter(params){
            console.log(params[0].data);
            const item = params[0].data
            return `
                销量：${item}
               `;
        }
    },
    legend: {
        show:true,
        data: ['销量'],
        itemHeight: 9,//改变圆圈大小
        // icon: "rect",
        right:20,
        textStyle: {
            color: '#2b80ff'  // 图例文字颜色
        }

    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisLine: {
            lineStyle: {
                color: "#091021"
            }
        },
        axisLabel: { //轴文字标签
            textStyle: {
                color: '#4d8cb9',
            }
        },
    },
    yAxis: {
        lineHeight: 26,
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: "#091021"
            }
        },
        axisLabel: { //轴文字标签
            textStyle: {
                color: '#4d8cb9',
            }
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: "#0e1d36"
            }
        },
        data: [2000, 4000, 6000, 8000, 10000, 12000]
    },
    series: [{
        name: '销量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// window.onresize = function () {
//     myChart.resize();
// }

var myChart_top2 = echarts.init(document.getElementById('main_top2'));
// 指定图表的配置项和数据
var option = {
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
myChart_top2.setOption(option);

var myChart_top3 = echarts.init(document.getElementById('main_top3'));
// 指定图表的配置项和数据
var option = {
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
myChart_top3.setOption(option);

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
    color: ["#2bfaff", "#ffff00", "#4cabce", "#e5323e"],
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
        data: ['销售额', '增长率'],
        icon:"rect",
        itemHeight :4,
        right:30,
        textStyle: {
            color: '#2b80ff'  // 图例文字颜色
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
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            axisLabel: { //轴文字标签
                textStyle: {
                    color: '#7086b9',
                }
            },
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




//不同类别的销售额排名

var fruitsRanking = echarts.init(document.getElementById('fruits_ranking'));
getDifferentTypes()
function getDifferentTypes(){
    obj = { chart_num: 9 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            console.log(res);
            var fruitsRankingData=[];
            var sum;
            for (const key in res) {
                fruitsRankingData.push(key)
                if (res.hasOwnProperty(key)) {
                    const element = res[key];
                    // console.log(element)
                    for (let index = 0; index < element.length; index++) {
                        for (let j = 0; j < element[index].length; j++) {
                            const elm = element[index][2];
                               sum+= parseFloat(elm.amount)
                            // console.log()
                        }
                        
                    }
                    // console.log(am)
                    console.log(sum)
                }
            }
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    show:false,
                    data: []
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    show:false,
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    axisLabel: { //轴文字标签
                        textStyle: {
                            color: '#28a4fd',
                        }
                    },
                    data:fruitsRankingData
                },
                series: [
                    {
                        name: '销售额',
                        type: 'bar',
                        label:{
                            show:true,
                            position:"insideRight",
                            color:"#f23d63",
                        },
                        itemStyle: {
                            shadowOffsetX:10,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    {offset: 0, color: '#206ca8'},
                                    {offset: 0.5, color: '#56517e'},
                                    {offset: 1, color: '#a72841'}
                                ]
                            )
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: '#206ca8'},
                                        {offset: 0.5, color: '#56517e'},
                                        {offset: 1, color: '#a72841'}
                                    ]
                                )
                            }
                        },
                        data: [ 29034, 14970, 5344, 6300, 34423, 23334, 23442, 23424]
                    }
                ]
            };
            fruitsRanking.setOption(option);
        }
    });
    
}



// 热销top5商品
getHotSell5()
function getHotSell5() {
    obj = { chart_num: 2 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            var tableData = "";
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    const element = res[key];
                    var item_name = element[0].item_name.substring(0, 4) + "...";
                    tableData += `
                        <tr>
                            <td>${key}</td>
                            <td title="${element[0].item_name}">${item_name}</td>
                            <td>${element[1].item_price}元</td>
                            <td>${element[2].item_total}斤</td>
                            <td>${element[3].amount}元</td>
                        </tr>

                    `;
                }
            }
            $("#top_sell5_data tbody").html(tableData);
        }
    });
}

// 滞销商品
getunsalableData()
function getunsalableData() {
    obj = { chart_num: 3 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            var tableData = "";
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    const element = res[key];
                    var item_name = element[0].item_name.substring(0, 4) + "...";
                    tableData += `
                        <tr>
                            <td>${key}</td>
                            <td title="${element[0].item_name}">${item_name}</td>
                            <td>${element[1].item_price}元</td>
                            <td>${element[2].item_total}斤</td>
                            <td>${element[3].amount}元</td>
                        </tr>

                    `;
                }
            }
            $("#unsalable_tableData tbody").html(tableData);
        }
    });
}

// 最爱商品组合
getCombinationData()
function getCombinationData() {
    obj = { chart_num: 4 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            var tableData = "";
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    const element = res[key];
                    var item_name = element[0].item_name.substring(0, 6) + "...";
                    tableData += `
                        <tr>
                            <td>${key}</td>
                            <td title="${element[0].item_name}">${item_name}</td>
                            <td>${element[1].item_price}元</td>
                            <td>${element[2].item_total}斤</td>
                        </tr>

                    `;
                }
            }
            $("#combination_tableData tbody").html(tableData);
        }
    });
}

//总销售数量统计
getTotalSalesData()
function getTotalSalesData() {
    obj = { chart_num: 5 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            // console.log(res)
            $("#sell_money").html(res["销售额"]);
            $("#sell_amount").html(res["销售数量"]);
            $("#sell_unit_price").html(res["客单价"]);
        }
    });
}

// 商品类别销售排名
getGoodsTypeData()
function getGoodsTypeData() {
    obj = { chart_num: 7 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            // console.log(res)
            var tableData = "";
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    const element = res[key];
                    var item_name = element[0].item_name.substring(0, 4) + "...";
                    tableData += `
                        <tr>
                            <td>${key}</td>
                            <td title="${element[0].item_name}">${item_name}</td>
                            <td>${element[2].item_total}斤</td>
                            <td>${element[3].amount}元</td>
                        </tr>
                    `;
                }
            }
            $("#goods_type_table tbody").html(tableData);
        }
    });
}
// 商品销售额排名
getGoodsSellData()
function getGoodsSellData() {
    obj = { chart_num: 8 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            // console.log(res)
            var tableData = "";
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    const element = res[key];
                    var item_name = element[0].item_name.substring(0, 4) + "...";
                    tableData += `
                        <tr>
                            <td>${key}</td>
                            <td title="${element[0].item_name}">${item_name}</td>
                            <td>${element[2].item_total}斤</td>
                            <td>${element[3].amount}元</td>
                        </tr>
                    `;
                }
            }
            $("#goods_sell_table tbody").html(tableData);
        }
    });
}


