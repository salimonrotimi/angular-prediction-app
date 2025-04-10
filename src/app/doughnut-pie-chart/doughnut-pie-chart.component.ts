import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ProjectService } from '../project.service';
Chart.register(...registerables);


// This defines
const theme = 'Bright';

@Component({
  selector: 'app-doughnut-pie-chart',
  templateUrl: './doughnut-pie-chart.component.html',
  styleUrls: ['./doughnut-pie-chart.component.css']
})
export class DoughnutPieChartComponent implements OnInit {

  loadedData: any;
  chartLoadedLabel: any[] = [];
  chartLoadedData: any[] = [];

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.service.getTopInvestors().subscribe((res)=>{
      this.loadedData = res;

      if(this.loadedData != null){
        for(let i=0; i<this.loadedData.length; i++){
          this.chartLoadedLabel.push(this.loadedData[i].businessName);
          this.chartLoadedData.push(this.loadedData[i].amountInvested);
        }
        this.generateDoughnutchartfromLoadedData(this.chartLoadedLabel, this.chartLoadedData);
      }

    });
  }

  generateDoughnutchartfromLoadedData(chartLabel:any, chartData:any){
    new Chart('ctx', {
      type: 'doughnut',
      data: {
        labels: chartLabel,
        datasets: [{
          label: 'Top Investors',
          data: chartData,
          backgroundColor: [
            'rgba(255,99,132,0.4)',
            'rgba(24,62,235,0.4)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.4)',
            'rgba(153,102,255,0.4)',
            'rgba(255,159,64,0.4)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(24,62,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,64,1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
            beginAtZero:true,
            grid: {
              display: false,
            }
          }
        }
      }
    });

  }
}
