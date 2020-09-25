// /////客户年龄数据
const url = {
    host: "http://39.105.36.198:8000/analysis_charts/comanly/",
    host2: "http://39.105.36.198:8000/analysis_charts/custanly/"
}

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
                color: ["#3fc3d0", "#dd614a", "#f77900", "#8bbbfc", "#f7b61c", "#6cdabd"],
                tooltip: {
                    show: false,
                },
                legend: {
                    show: false
                },
                grid: {
                    left: "0%",
                    // right:"10%",
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
                color: ["#3fc3d0", "#dd614a", "#f77900", "#8bbbfc", "#f7b61c", "#6cdabd"],
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
                  data: []//类目数据，在类目轴（type: 'category'）中有效。
                         //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
                },
                series: [//系列列表。每个系列通过 type 决定自己的图表类型
                  {
                    name: '',//系列名称
                    type: 'bar',//柱状、条形图
                    barWidth: 10,//柱条的宽度,默认自适应
                    barMinHeight:1,
                    data: pieAgeDate,//系列中数据内容数组
                    label: { //图形上的文本标签
                      show: true,
                      position: ['0%','-150%'],//标签的位置
                    //   offset: [0,-140],  //标签文字的偏移，此处表示向上偏移40
                      formatter: '{b}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                      color: '#fff',//标签字体颜色
                      fontSize: 12  //标签字号
                    },
                    itemStyle: {//图形样式
                      normal: {  //normal 图形在默认状态下的样式;
                        color:function (params){
                            console.log(params);
                            var colorList = ["#3fc3d0", "#dd614a", "#f77900", "#8bbbfc", "#f7b61c", "#6cdabd"];
                            return colorList[params.dataIndex];
                        }
                        // color: new echarts.graphic.LinearGradient(
                        //   0, 0, 1, 0,
                        //   [{
                        //     offset: 0,
                        //     color: '#22B6ED'//柱图渐变色起点颜色
                        //   },
                        //     {
                        //       offset: 1,
                        //       color: '#3FE279'//柱图渐变色终点颜色
                        //     }
                        //   ]
                        // )
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
                    barMinHeight:10,
                    data: [100,100,100,100,100,100],
                    // color: 'rgba(1,1,1,0)',//柱条颜色
                    color:function (params){
                        console.log(params);
                        var colorList = ["#3fc3d0", "#dd614a", "#f77900", "#8bbbfc", "#f7b61c", "#6cdabd"];
                        return colorList[params.dataIndex];
                    },
                    // showBackground:false,
                    itemStyle: {
                        borderColor:function (params){
                                console.log(params);
                                var colorList = ["#3fc3d0", "#dd614a", "#f77900", "#8bbbfc", "#f7b61c", "#6cdabd"];
                                return colorList[params.dataIndex];
                            },
                        
                        // color:function (params){
                        //     console.log(params);
                        //     var colorList = ["#3fc3d0", "#dd614a", "#f77900", "#8bbbfc", "#f7b61c", "#6cdabd"];
                        //     return colorList[params.dataIndex];
                        // }
                    },
                    // label:{
                    //     show:true,
                    //     position: 'top',
                    // }
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