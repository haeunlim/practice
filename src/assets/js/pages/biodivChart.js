      ! function ($) {
          "use strict";

          var report = function () {
              this.$body = $("body"),
                  this.charts = []
          };


          // init various charts and returns
          report.prototype.initCharts = function () {
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
                  // 연령별 차트 시작
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
                          categories: [
                              ["20대"],
                              ["30대"],
                              ["40대"],
                              ["50대"]
                          ],
                          labels: {
                              style: {
                                  colors: colors,
                                  fontSize: '0.8rem'
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
                                  fontSize: '0.8rem'
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
                              fontSize: '0.8rem',
                              fontWeight: 'bold',
                              fontFamily: undefined,
                              color: '#8391a2'
                          },
                      }
                  }

                  var chart = new ApexCharts(
                      document.querySelector("#age_group_ratio"),
                      options
                  );

                  chart.render();

                  // -연령차트 끝 -------------------------------------------------
                  // -성별 차트 시작-------------------------------------------------
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
                          categories: [
                              ["남"],
                              ["여"]
                          ],
                          labels: {
                              style: {
                                  colors: colors,
                                  fontSize: '0.8rem'
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
                                  fontSize: '0.8rem'
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
                              fontSize: '0.8rem',
                              fontWeight: 'bold',
                              fontFamily: undefined,
                              color: '#8391a2'
                          },
                      }
                  }


                  var chart = new ApexCharts(
                      document.querySelector("#gender_group_ratio"),
                      options
                  );

                  chart.render();
                  // 성별차트 끝 지역별 조사 대상 시작---------------------------------------------
                  var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
                  var dataColors = $("#region-chart").data('colors');
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
                          fontSize: '0.8rem',
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
                    //   responsive: [{
                    //       breakpoint: 480,
                    //       options: {
                    //           chart: {
                    //               width: 200
                    //           },
                    //           legend: {
                    //               position: 'bottom'
                    //           }
                    //       }
                    //   }]
                  }

                  var chart = new ApexCharts(
                      document.querySelector("#region-chart"),
                      options
                  );

                  chart.render();

              },
              // 지역별 조사 대상 끝
              //initializing various components and plugins
              report.prototype.init = function () {
                  var $this = this;
                  // font
                  Chart.defaults.font.family =
                      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

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
              $.report = new report, $.report.Constructor = report
      }(window.jQuery),

      //initializing report
      function ($) {
          "use strict";
          $.report.init()
      }(window.jQuery);