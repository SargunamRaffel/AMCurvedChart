//@ts-nocheck
import { Component, ReactNode, createElement } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { AMCurvedChartContainerProps } from "../typings/AMCurvedChartProps";
import "./ui/AMCurvedChart.css";

export default class AMCurvedChart extends Component<AMCurvedChartContainerProps> {
    root: am5.Root | undefined;
    constructor(props: AMCurvedChartContainerProps | Readonly<AMCurvedChartContainerProps>) {
        super(props)
        this.state = {
            chartID: this.props.chartId + Math.floor(Math.random() * 100000)
        }
    }
    componentDidUpdate() {
        am5.array.each(am5.registry.rootElements, (root) => {
            console.log(root)

            if (root) {

                if (root.dom.id.includes(this.props.chartId)) {

                    root.dispose();
                    root._logo.dispose();

                }

            }

        });
             
        let chartID = `${this.state.chartID}`
        let root = am5.Root.new(chartID)
        // ... chart code goes here ...
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          // Create chart
          // https://www.amcharts.com/docs/v5/charts/xy-chart/
          let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panX: true,
              panY: true,
              wheelX: "panX",
              wheelY: "zoomX"
            })
          );
          
          // Add cursor
          // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
          let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
          cursor.lineY.set("visible", false);
          
          // Create axes
          // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
          let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
          
          let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
              maxDeviation: 0.3,
              categoryField: "country",
              renderer: xRenderer,
              tooltip: am5.Tooltip.new(root, {})
            })
          );
          
          xRenderer.grid.template.setAll({
            location: 1
          })
          
          let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
              maxDeviation: 0.3,
              renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
              })
            })
          );
          
          // Create series
          // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
          let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
              name: "Series 1",
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "value",
              sequencedInterpolation: true,
              categoryXField: "country"
            })
          );
          
          series.columns.template.setAll({
            width: am5.percent(120),
            fillOpacity: 0.9,
            strokeOpacity: 0
          });
          series.columns.template.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
          });
          
          series.columns.template.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
          });
          
          series.columns.template.set("draw", function(display, target) {
            let w = target.getPrivate("width", 0);
            let h = target.getPrivate("height", 0);
            display.moveTo(0, h);
            display.bezierCurveTo(w / 4, h, w / 4, 0, w / 2, 0);
            display.bezierCurveTo(w - w / 4, 0, w - w / 4, h, w, h);
          });
          
          // Set data
          let jsonString = this.props.ChartValue.displayValue;
         
          let data = JSON.parse(jsonString);
          xAxis.data.setAll(data);
          series.data.setAll(data);
          
          // Make stuff animate on load
          // https://www.amcharts.com/docs/v5/concepts/animations/
          series.appear(1000);
          chart.appear(1000, 100);
    
        this.root = root;
        console.log(jsonString);
      }
    
      componentWillUnmount() {
        if (this.root) {
          this.root.dispose();
        }
      }
    
      render(): ReactNode {
        return (
            <div id={this.state.chartID} style={{ width: this.props.width + "%", height: this.props.height + "px" }}>
            </div>
        );
      }
   
}
