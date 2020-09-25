
const url = {
    host: "http://39.105.36.198:8000/analysis_charts/comanly/",
    host2: "http://39.105.36.198:8000/analysis_charts/custanly/"
}

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main_top1'));
var myChart_top2 = echarts.init(document.getElementById('main_top2'));
var myChart_top3 = echarts.init(document.getElementById('main_top3'));
// window.onresize = function () {
//     myChart.resize();
// }

getData();
function getData() {
    obj = { chart_num: 1 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            var timeData = [];
            var opt1 = [];
            var opt2 = [];
            var opt3 = [];
            console.log(res);
            var title = res.source;
            $(".top_product_title > li").each(function (index) {
                $(".top_product_title > li:nth-child(" + (index + 1) + ") > span").html(title[0][index].substring(0, 4) + "...");
                $(".top_product_title > li:nth-child(" + (index + 1) + ") > span").attr("title", title[0][index])
            });

            for (let i = 1; i < res.source1.length; i++) {
                const element = res.source1[i];
                // console.log(element[0])
                timeData.push(element[0])
                opt1.push(element[1])
            }
            for (let i = 1; i < res.source2.length; i++) {
                const element = res.source2[i];
                opt2.push(element[1])
            }
            for (let i = 1; i < res.source3.length; i++) {
                const element = res.source3[i];
                opt3.push(element[1])
            }
            console.log(timeData)
            // 指定图表的配置项和数据
            var option1 = {
                color: ['#1f5a8a'],
                // 坐标指示器颜色
                tooltip: {
                    trigger: "axis",
                    backgroundColor: "#0bb8fa",
                    textStyle: {
                        color: '#fff'  // 图例文字颜色
                    },
                    formatter(params) {
                        const item = params[0].data
                        return `
                销量：${item}
               `;
                    }
                },
                grid: {
                    top: "15%",
                    left: '3%',
                    right: '5%',
                    bottom: '6%',
                    containLabel: true
                },
                legend: {
                    show: true,
                    data: ['销量'],
                    itemHeight: 9,//改变圆圈大小
                    // icon: "rect",
                    right: 20,
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
                        },
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
                    data: opt1,
                    type: 'line',
                    smooth: true,
                    areaStyle: {}
                }]
            };

            // 指定图表的配置项和数据
            var option2 = {
                color: ['#1f5a8a'],
                // 坐标指示器颜色
                tooltip: {
                    trigger: "axis",
                    backgroundColor: "#0bb8fa",
                    textStyle: {
                        color: '#fff'  // 图例文字颜色
                    },
                    formatter(params) {
                        // console.log(params[0].data);
                        const item = params[0].data
                        return `
                销量：${item}
               `;
                    }
                },
                grid: {
                    top: "15%",
                    left: '3%',
                    right: '5%',
                    bottom: '6%',
                    containLabel: true
                },
                legend: {
                    show: true,
                    data: ['销量'],
                    itemHeight: 9,//改变圆圈大小
                    // icon: "rect",
                    right: 20,
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
                    data: opt2,
                    type: 'line',
                    smooth: true,
                    areaStyle: {}
                }]
            };
            var option3 = {
                color: ['#1f5a8a'],
                // 坐标指示器颜色
                tooltip: {
                    trigger: "axis",
                    backgroundColor: "#0bb8fa",
                    textStyle: {
                        color: '#fff'  // 图例文字颜色
                    },
                    formatter(params) {
                        const item = params[0].data
                        return `
                            销量：${item}
                           `;
                    }
                },
                grid: {
                    top: "15%",
                    left: '3%',
                    right: '5%',
                    bottom: '6%',
                    containLabel: true
                },
                legend: {
                    show: true,
                    data: ['销量'],
                    itemHeight: 9,//改变圆圈大小
                    // icon: "rect",
                    right: 20,
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
                    smooth: true,
                    data: opt3,
                    type: 'line',
                    areaStyle: {}
                }]
            };
            // 使用刚指定的配置项和数据显示图表。。
            myChart.setOption(option1);
            myChart_top2.setOption(option2);
            myChart_top3.setOption(option3);
        }
    });
}


//销售额增长率
var myChartRate = echarts.init(document.getElementById('growth_rate'));
getGrowthRate()
function getGrowthRate() {
    obj = { chart_num: 6 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            console.log(res.source);
            var arrData = [];
            var rateData = [];
            for (let i = 1; i < res.source.length; i++) {
                const element = res.source[i];
                // console.log(element[1])
                arrData.push(element[1])
                rateData.push(element[2])
            }

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
                    icon: "rect",
                    itemHeight: 4,
                    right: 30,
                    textStyle: {
                        color: '#2b80ff'  // 图例文字颜色
                    }
                },
                grid: {
                    top: "15%",
                    left: '3%',
                    right: '4%',
                    bottom: '6%',
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
                        type: "value",
                        axisLabel: {
                            textStyle: {
                                color: "#7086b9"
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: { show: false }
                    },
                    {

                        type: "value",
                        position: "right",
                        axisLine: {
                            show: false
                        },
                        axisTick: { show: false },
                        min: 0,
                        max: 100,
                        axisLabel: {
                            textStyle: {
                                color: "#7086b9"
                            },
                            show: true,
                            interval: "auto",
                            formatter: "{value}%"
                        },
                        show: true
                    },

                ],
                series: [
                    {
                        name: '销售额',
                        type: 'line',
                        smooth: true,
                        stack: '销售额',
                        areaStyle: {},
                        data: arrData
                    },
                    {
                        name: '增长率',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        stack: '增长率',
                        areaStyle: {},
                        data: rateData
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChartRate.setOption(option);
        }
    })
}


//单击分类触发事件
$(".icon_content li span:last-child").on("click",function(e){
    console.log($(this).text() )
    var text = $(this).text();
    getDifferentTypes(text)
})
//不同类别的销售额排名
var fruitsRanking = echarts.init(document.getElementById('fruits_ranking'));
getDifferentTypes()
function getDifferentTypes(text) {
    obj = { chart_num: 9 }
    $.ajax({
        type: 'POST',
        url: url.host,
        data: obj,
        success: function (res) {
            var fruitsRankingData = [];  // key
            var fruitsRankingVal = [];  //指定key的值
            var item_name = [];
            var amount=[];
            for (const key in res) {
                // console.log(Object.keys(res));
                fruitsRankingData=Object.keys(res);
            }
            if (text) {
                fruitsRankingVal = res[text];
            } else {
                fruitsRankingVal = res[ fruitsRankingData[0]];
            }
            fruitsRankingVal.forEach(element => {  // 当前y轴对应的数据
                item_name.push(element[1].item_name);
                amount.push(element[2].amount)
            });
            console.log(fruitsRankingVal);
            $(".icon_content li").each(function(index){
                $(".icon_content li:nth-child("+(index+1)+") > span:last-child").html(fruitsRankingData[index]);
            });
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    
                },
                legend: {
                    show: false,
                    data: []
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    show: false,
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    axisLabel: { //轴文字标签
                        textStyle: {
                            color: '#28a4fd',
                        },
                        formatter: function (value,index) {
                            console.log(value,index)
                            return  value.substring(0,4)+"..." ;
                           // 鼠标移上显示的文字
                        }
                    },
                    data: item_name,
                },
                series: [
                    {
                        name: '销售额',
                        type: 'bar',
                        label: {
                            show: true,
                            position: "insideRight",
                            color: "#f23d63",
                        },
                        itemStyle: {
                            shadowOffsetX: 10,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    { offset: 0, color: '#206ca8' },
                                    { offset: 0.5, color: '#56517e' },
                                    { offset: 1, color: '#a72841' }
                                ]
                            )
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        { offset: 0, color: '#206ca8' },
                                        { offset: 0.5, color: '#56517e' },
                                        { offset: 1, color: '#a72841' }
                                    ]
                                )
                            }
                        },
                        data: amount
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



// /////客户年龄数据

var chart_pie = echarts.init(document.getElementById('chart_pie'));
var chart_pie2 = echarts.init(document.getElementById('chart_pie2'));
var chart_progress = echarts.init(document.getElementById('chart_progress'));

getClientAge()
function getClientAge() {
    obj = { chart_num: 19 }
    $.ajax({
        type: 'POST',
        url: url.host2,
        data: obj,
        success: function (res) {
            // console.log(res);
            var pieAgeDate = res;

            option = {
                color: ["#1be26f", "#d0710b", "#0b55d0", "#8207c9", "#e21b9e", "#2573e7",],
                tooltip: {
                    show: false,
                },
                legend: {
                    show: false
                },
                grid: {
                    left: "10%",
                    // right:"10%",
                    top: "10%",
                    bottom: "10%",
                },
                series: [
                    {
                        name: '年龄分布',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            position: 'outside',
                            color: "#5ac7ce",
                            formatter: '{b},\n({d}%)'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {   //视觉引导线
                            show: true,
                            length: 20,
                            length2: 20,
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        data: pieAgeDate,

                    }
                ]
            };
            chart_pie.setOption(option);
        }
    })
}

//饼状图
getClientExpend()
function getClientExpend() {

    obj = { chart_num: 20 }
    $.ajax({
        type: 'POST',
        url: url.host2,
        data: obj,
        success: function (res) {
            console.log(res);
            var pieAgeDate = res;

            optionAge1 = {
                color: ["#1be26f", "#d0710b", "#0b55d0", "#8207c9", "#e21b9e", "#2573e7",],
                tooltip: {
                    show: false,
                },
                legend: {
                    show: false
                },
                grid: {
                    left: "10%",
                    // right:"10%",
                    top: "10%",
                    bottom: "10%",
                },
                series: [
                    {
                        name: '年龄消费',
                        type: 'pie',
                        radius: ['20%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            fontSize: 10,
                            position: 'inside',
                            color: "#fff",
                            formatter: '{d}%'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        data: pieAgeDate,

                    }
                ]
            };

            optionAge2 = {
                grid: {   // 直角坐标系内绘图网格
                  top: '8',
                  right: '0',
                  bottom: '0',
                  containLabel: true   //gid区域是否包含坐标轴的刻度标签。为true的时候，
                  // left/right/top/bottom/width/height决定的是包括了坐标轴标签在内的
                  //所有内容所形成的矩形的位置.常用于【防止标签溢出】的场景
                },
                xAxis: {  //直角坐标系grid中的x轴,
                          //一般情况下单个grid组件最多只能放上下两个x轴,
                          //多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
                  type: 'value',//坐标轴类型,分别有：
                                //'value'-数值轴；'category'-类目轴;
                                //'time'-时间轴;'log'-对数轴
                  splitLine: {show: false},//坐标轴在 grid 区域中的分隔线
                  axisLabel: {show: false},//坐标轴刻度标签
                  axisTick: {show: false},//坐标轴刻度
                  axisLine: {show: false},//坐标轴轴线
                },
                yAxis: {
                  type: 'category',
                  barCategoryGap:"2%",
                  axisTick: {show: false},
                  axisLine: {show: false},
                  axisLabel: {
                    color: '#fff',
                    fontSize: 16
                  },
                  data: []//类目数据，在类目轴（type: 'category'）中有效。
                         //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
                },
                series: [//系列列表。每个系列通过 type 决定自己的图表类型
                  {
                    name: '%',//系列名称
                    type: 'bar',//柱状、条形图
                    barWidth: 10,//柱条的宽度,默认自适应
                    
                    data: [20,40,60,40,50,60],//系列中数据内容数组
                    label: { //图形上的文本标签
                      show: true,
                      position: 'top',//标签的位置
                      offset: [0,-140],  //标签文字的偏移，此处表示向上偏移40
                      formatter: '{c}{a}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                      color: '#fff',//标签字体颜色
                      fontSize: 16  //标签字号
                    },
                    itemStyle: {//图形样式
                      normal: {  //normal 图形在默认状态下的样式;
                                 //emphasis图形在高亮状态下的样式
                        //barBorderRadius: 10,//柱条圆角半径,单位px.
                                            //此处统一设置4个角的圆角大小;
                                   //也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
                        color: new echarts.graphic.LinearGradient(
                          0, 0, 1, 0,
                          [{
                            offset: 0,
                            color: '#22B6ED'//柱图渐变色起点颜色
                          },
                            {
                              offset: 1,
                              color: '#3FE279'//柱图渐变色终点颜色
                            }
                          ]
                        )
                      }
                    },
                    zlevel:1//柱状图所有图形的 zlevel 值,
                            //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
                  },
                  {
                    name: '进度条背景',
                    type: 'bar',
                    barGap: '-100%',//不同系列的柱间距离，为百分比。
                    // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
                    // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
                     //并且是对此坐标系中所有 'bar' 系列生效。
                     barCategoryGap:"2%",
                    barWidth: 10,
                    data: [100, 100, 100],
                    color: 'rgba(1,1,1,0)',//柱条颜色
                    itemStyle: {
                        borderColor:"#13e1f3"
                    },
                    label:{
                        show:true,
                        position: 'top',
                    }
                  }
                ]
              }
  
            chart_pie2.setOption(optionAge1);
            chart_progress.setOption(optionAge2);
        }
    })


}

//26-35岁年龄顾客偏好
getPreferenceData()
function getPreferenceData(){
    obj = { chart_num: 21 }
    $.ajax({
        type: 'POST',
        url: url.host2,
        data: obj,
        success: function (res) {
            console.log(res);
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
                            <td>${element[2].item_total}件</td>
                            <td>${element[3].amount}元</td>
                        </tr>

                    `;
                }
            }
            $("#preference_tableData tbody").html(tableData);
        }
    });
}