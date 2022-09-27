/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Profile
 */

! function ($) {
    "use strict";

    var Profile = function () {
        this.$body = $("body"),
            this.charts = []
    };

    Profile.prototype.respChart = function (selector, type, data, options) {

            var draw3 = Chart.controllers.bar.prototype.draw;
            Chart.controllers.bar.draw = function () {
                draw3.apply(this, arguments);
                var ctx = this.chart.ctx;
                var _fill = ctx.fill;
                ctx.fill = function () {
                    ctx.save();
                    ctx.shadowColor = 'rgba(0,0,0,0.01)';
                    ctx.shadowBlur = 20;
                    ctx.shadowOffsetX = 4;
                    ctx.shadowOffsetY = 5;
                    _fill.apply(this, arguments)
                    ctx.restore();
                }
            }

            //default config
            Chart.defaults.font.color = "#8391a2";
            Chart.defaults.scale.grid.color = "#8391a2";

            // get selector by context
            var ctx = selector.get(0).getContext("2d");
            // pointing parent container to make chart js inherit its width
            var container = $(selector).parent();

            // this function produce the responsive Chart JS
            function generateChart() {
                // make chart width fit with its container
                var ww = selector.attr('width', $(container).width());
                var chart;
                switch (type) {
                    case 'Line':
                        chart = new Chart(ctx, {
                            type: 'line',
                            data: data,
                            options: options
                        });
                        break;
                    case 'Doughnut':
                        chart = new Chart(ctx, {
                            type: 'doughnut',
                            data: data,
                            options: options
                        });
                        break;
                    case 'Pie':
                        chart = new Chart(ctx, {
                            type: 'pie',
                            data: data,
                            options: options
                        });
                        break;
                    case 'Bar':
                        chart = new Chart(ctx, {
                            type: 'bar',
                            data: data,
                            options: options
                        });
                        break;
                    case 'Radar':
                        chart = new Chart(ctx, {
                            type: 'radar',
                            data: data,
                            options: options
                        });
                        break;
                    case 'PolarArea':
                        chart = new Chart(ctx, {
                            data: data,
                            type: 'polarArea',
                            options: options
                        });
                        break;
                }
                return chart;
            };
            // run function - render chart at first load
            return generateChart();
        },
        // init various charts and returns
        Profile.prototype.initCharts = function () {
            window.Apex = {
                chart: {
                    height: 320,
                    parentHeightOffset: 0,
                    toolbar: {
                        show: false
                    }
                },
                grid: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 30,
                        bottom: 20
                    }
                },
                colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            };

            var colors = ["#aaaaaa", "#727cf5", "#aaaaaa", "#aaaaaa"];
            var dataColors = $("#age_group_ratio").data('colors');
            if (dataColors) {
                colors = dataColors.split(",");
            }

            var options = {
                chart: {
                    type: 'bar',
                    stacked: true,
                    dropShadow: {
                        enabled: true,
                        opacity: 0.1,
                        blur: 3,
                        left: -3,
                        top: 3
                    },
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                      return val + "%";
                    },
                    offsetY: -20,
                    style: {
                      fontSize: '1rem',
                      colors: colors
                    }
                  },
              
                series: [{
                        name: '',
                        data: [25, 60, 25, 10],
                    },

                ],
                plotOptions: {
                    bar: {
                      columnWidth: '80%',
                      distributed: true,
                      dataLabels: {
                        position: 'top',
                      },
                    },
                    
                  },
                colors: colors,
                zoom: {
                    enabled: false
                },
                legend: {
                    show: false
                },

                xaxis: {
                    type: 'string',
                    categories: [["20대"],["30대"], ["40대"], ["50대"]],
                    labels: {
                        style: {
                          colors: colors,
                          fontSize: '0.7rem'
                        }
                      },
                    tooltip: {
                        enabled: false
                    },
                    axisBorder: {
                        show: false
                    },
                },
                yaxis: {
                    
                    labels: {
                        formatter: function (val) {
                            return val + "%"
                        },
                        offsetX: -15,
                        style: {
                            colors: colors,
                            fontSize: '0.7rem'
                          }
                    }
                },
                title: {
                    text: '연령대 ',
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 30,
                    floating: false,
                    style: {
                      fontSize:  '0.8rem',
                      fontWeight:  'bold',
                      fontFamily:  undefined,
                      color:  '#8391a2'
                    },
                }
            }

            var chart = new ApexCharts(
                document.querySelector("#age_group_ratio"),
                options
            );

            chart.render();

            // --------------------------------------------------
            var colors = ["#727cf5", "#fa5c7c"];
            var dataColors = $("#gender_group_ratio").data('colors');
            if (dataColors) {
                colors = dataColors.split(",");
            }
            var options = {
                chart: {
                    type: 'bar',
                    dropShadow: {
                        enabled: true,
                        opacity: 0.1,
                        blur: 3,
                        left: -3,
                        top: 3
                    },
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val, opts) {
                        return val + '%'
                    },
                    style: {
                        fontSize: '1rem',
                        fontWeight: 'bold',
                    },
                },
              
                series: [{
                        name: '비율',
                        data: [25, 60],
                    },

                ],
                plotOptions: {
                    bar: {
                      columnWidth: '80%',
                      distributed: true,
                    },
                    
                  },
                colors: colors,
                zoom: {
                    enabled: false
                },
                legend: {
                    show: false
                },

                xaxis: {
                    type: 'string',
                    categories: [["남"],["여"]],
                    labels: {
                        style: {
                          colors: colors,
                          fontSize: '0.7rem'
                        }
                      },
                    tooltip: {
                        enabled: false
                    },
                    axisBorder: {
                        show: false
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val + "%"
                        },
                        offsetX: -15,
                        style: {
                            colors: colors,
                            fontSize: '0.7rem'
                          }
                    },
                },
                title: {
                    text: '성별',
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 30,
                    floating: false,
                    style: {
                      fontSize:  '0.8rem',
                      fontWeight:  'bold',
                      fontFamily:  undefined,
                      color:  '#8391a2'
                    },
                }
            }


            var chart = new ApexCharts(
                document.querySelector("#gender_group_ratio"),
                options
            );

            chart.render();
            // --------------------------------------------------
            var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
            var dataColors = $("#average-sales").data('colors');
            if (dataColors) {
                colors = dataColors.split(",");
            }
            var options = {
                chart: {
                    type: 'pie',
                    toolbar: false,

                },
                grid: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    horizontalAlign: 'right',
                    position: 'top',
                    fontSize: '0.7rem',
                    fontFamily: 'Poppins, sans-serif',
                    labels: {
                        colors: '#353535',
                    },
                    markers: {
                        width: 10,
                        height: 10,
                        radius: 0,
                    },
                },
                stroke: {
                    colors: ['transparent']
                },
                series: [44, 55, 41, 17],
                labels: ["지역1", "지역2", "지역3", "지역4"],
                colors: colors,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }

            var chart = new ApexCharts(
                document.querySelector("#average-sales"),
                options
            );

            chart.render();

        },

        //initializing various components and plugins
        Profile.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resize', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    } catch (err) {}
                });
                $this.charts = $this.initCharts();
            });
        },

        //init flotchart
        $.Profile = new Profile, $.Profile.Constructor = Profile
}(window.jQuery),

//initializing Profile
function ($) {
    "use strict";
    $.Profile.init()
}(window.jQuery);