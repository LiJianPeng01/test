const url ={
    host:"http://39.105.36.198:8000/analysis_charts/comanly/"
}
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '年销售额年度最高商品1'
    },
    grid:{
       
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1,2, 3, 4, 5, 6, 7,8,9,10,11,12],
        axisLine:{
            lineStyle:{
                color:"#091022"
            }
        }
    },
    yAxis: {
        lineHeight: 26,
        type: 'value',
        data: [2000, 4000,  6000, 8000,10000,12000]
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize=function(){
    myChart.resize();
}
getData();
function getData(){
    var xhr = new XMLHttpRequest();
    obj={
        chart_num:1
    }
    xhr.onreadystatechange=function(){
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    }
    xhr.open("post",url.host,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(obj);
}