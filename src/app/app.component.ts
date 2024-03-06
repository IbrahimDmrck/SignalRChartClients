import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import * as signalR from "@microsoft/signalr";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options =
    {
      //Grafik Title
      title: {
        text: "Başlık"
      },
      subtitle: {
        text: "Alt Başlık"
      },
      yAxis:{
        title:{
          text:"Y Ekseni"
        }
      },
      xAxis:{
        accessibility:{
          rangeDescription:"2019 - 2024"
        }
      },
      legend:{
        layout:"vertical",
        align:'right',
        verticalAlign:"middle"
      },
      series:[
       {
        name:"X",
        type: "line",
        data:[1000,2000,3000]
       },
       {
        name:"Y",
        type: "line",
        data:[4000,2755,7000]
       },
       {
        name:"Z",
        type: "line",
        data:[6071,1453,1915]
       }
      ],
      plotOptions:{
        series:{
          label:{
            connectorAllowed:true
          },
          pointStart:100
        }
      }
    }
}
