$(function () {

    Highcharts.setOptions({
        global : {
            useUTC : false
        }
    });
 
     $('#container').highcharts('StockChart', {
        chart : {
            height: 400,
            events : {
                load : function () {

                   var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), 
                            y = Math.round(Math.random() * 200);
                        series.addPoint([x, y], true, true);
                    }, 1000);
                    
                    var series1 = this.series[1];
                    setInterval(function () {
                        var x = (new Date()).getTime(), 
                            y = Math.round(Math.random() * 200);
                        console.log(y);
                        series1.addPoint([x, y], true, true);
                    }, 1000);

                    var series2 = this.series[2];
                    setInterval(function () {
                        var x = (new Date()).getTime(), 
                            y = Math.round(Math.random() * 200);
                        series2.addPoint([x, y], true, true);
                    }, 1000);

                    var series3 = this.series[3];
                    setInterval(function () {
                        var x = (new Date()).getTime(), 
                            y = Math.round(Math.random() * 200);
                        series3.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title : {
            text : 'Parameters'
        },

        yAxis: {
            title: {
                text: 'Values'
            },
            plotLines: [{
                value: 140,
                width: 1,
                color: 'red',
                dashStyle: 'dash',
                label: {
                    // text: 'Latest value',
                    align: 'right',
                    y: 12,
                    x: 0
                }
            },{
                value: 130,
                width: 1,
                color: 'orange',
                dashStyle: 'dash',
                label: {
                    // text: 'Latest value',
                    align: 'right',
                    y: 12,
                    x: 0
                }
            },
            {
            value: 105,
            width: 1,
            color: 'green',
            dashStyle: 'dash',
            label: {
                // text: 'Latest value',
                align: 'right',
                y: 12,
                x: 0
            }
            
                },
            {
            value: 80,
            width: 1,
            color: 'purple',
            dashStyle: 'dash',
            label: {
                // text: 'Latest value',
                align: 'right',
                y: 12,
                x: 0
            }
            
                }],
        
            // gridLineColor: '#ff0000'
        },

        xAxis: {
            title: {
                text: 'Timestamp'
            }
        },

        exporting: {
            enabled: false
        },

        series : [{
            name: 'pulse',
            color: '#f0e68c',
            data : (function () {
                 var data1 = [], time = (new Date()).getTime(), i;

                for (i = -999; i <= 0; i += 1) {
                    data1.push([
                        time + i * 1000,
                        Math.round(Math.random() * 200)
                    ]);
                }
                return data1;
            }())
        },
        {
            name: 'syst_bp',
            color: '#adff2f',
            data : (function () {
                // generate an array of random data
                var data2 = [], time = (new Date()).getTime(), i;

                for (i = -999; i <= 0; i += 1) {
                    data2.push([
                        time + i * 1000,
                        Math.round(Math.random() * 200)
                    ]);
                }
                return data2;
            }())
        },
        {
            name: 'dyst_bp',
            color: '#36dbee',
            data : (function () {
                // generate an array of random data
                var data3 = [], time = (new Date()).getTime(), i;

                for (i = -999; i <= 0; i += 1) {
                    data3.push([
                        time + i * 1000,
                        Math.round(Math.random() * 200)
                    ]);
                }
                return data3;
            }())
        },
        {
            name : 'sugar',
            data : (function () {
                // generate an array of random data
                var data4 = [], time = (new Date()).getTime(), i;

                for (i = -999; i <= 0; i += 1) {
                    data4.push([
                        time + i * 1000,
                        Math.round(Math.random()* 200)
                    ]);
                }
                return data4;
            }())
        }]
        //, responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 500
        //         },
        //         chartOptions: {
        //             chart: {
        //                 height: 300
        //             },
        //             subtitle: {
        //                 text: null
        //             },
        //             navigator: {
        //                 enabled: true
        //             }
        //         }
        //     }]
        // }
     });
//     $('#button').click(function () {
//     var extremes = chart.yAxis[0].getExtremes();

//     chart.renderer.label(
//         'dataMax: ' + extremes.dataMax + '<br/>' +
//             'dataMin: ' + extremes.dataMin + '<br/>' +
//             'max: ' + extremes.max + '<br/>' +
//             'min: ' + extremes.min + '<br/>',
//         100,
//         100
//     )
//         .attr({
//             fill: '#FCFFC5',
//             zIndex: 8
//         })
//         .add();

//     $(this).attr('disabled', true);
// });

});


// $('#small').click(function () {
//     chart.setSize(400);
// });


// 105 80 130
 // var startInterval = setInterval(function(){
    //     $('#highlight').toggleClass('backgroundRed');
    //     $('#start-alert').clearInterval(startInterval);
    // },100);
    // var stopInterval = clearInterval(function(){
    //     $("#stop-alert").click();
    // });
    // $('#start-alert').clearInterval(startInterval);

    //  $('#start-alert').click(function(){
    //     // clearInterval(startInterval);
    //     $('#highlight').removeClass('backgroundRed');
    //  });
    //  clearInterval(function(){
    //     $("#stop-alert").toggleClass("backgroundRed");
    //  });
    //  clearInterval(function stop() {
    //     clearTimeout(timer);
    //  },1000)
    // $('#stop-alert').click(function(){
    //     $("#highlight").removeClass("backgroundRed");
    // });
    // $(function() {
    //     $('#stop-alert').setInterval('click',function() { //event passed inside function
    //         // event.stopPropagation();
    //         $('#highlight').toggleClass('backgroundRed');
    //     },100);
    //     // $('html').click(function() {
    //     //     $('#highlight').removeClass('backgroundClear');
    //     // });
    // });
        // highlight = document.getElementById("#highlight");
        // function start(){
        //     add = setInterval("#highlight",100).toggleClass("backgroundRed");
        // }start();
        // $('#start-alert').on('click',function() {
        //     setInterval(function() {
        //         $('#highlight').toggleClass('backgroundRed');
        //     },100);
        // });