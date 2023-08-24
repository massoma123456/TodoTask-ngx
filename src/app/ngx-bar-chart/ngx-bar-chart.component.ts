import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { timeout } from 'd3';
import { delay } from 'rxjs';

@Component({
  selector: 'app-ngx-bar-chart',
  templateUrl: './ngx-bar-chart.component.html',
  styleUrls: ['./ngx-bar-chart.component.scss']
})
export class NgxBarChartComponent implements OnInit {

  @Input() todoNumber = 0
  @Input() Inprogress=0
  @Input() Done=0
  showChart = false
  data: any[] = [
    {
    "name": "To Do",
    "value": 0
    },
    {
      "name": "In Progress",
      "value": 0
    },
    {
      "name": "Done",
      "value": 0
    }
    
];

  constructor() { }

  ngOnInit(): void {
    this.showChart = true
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoNumber']) {
      this.todoNumber = changes['todoNumber']['currentValue']
      const index = this.data.findIndex((item) =>{
        return item.name === "To Do"
      })
      this.data[index].value = this.todoNumber
      this.showChart = false
      setTimeout(() => {
        this.showChart = true;
      }, 100);
    }
    if(changes['Inprogress'])
    {
            this.Inprogress=changes['Inprogress']['currentValue']
            const index =this.data.findIndex((item)=>{
              return item.name==="In Progress"

     } )
     this.data[index].value = this.Inprogress
      this.showChart = false
      setTimeout(() => {
        this.showChart = true;
      }, 100);
    }
    if(changes['Done'])
    {
            this.Inprogress=changes['Done']['currentValue']
            const index =this.data.findIndex((item)=>{
              return item.name==="Done"

     } )
     this.data[index].value = this.Done
      this.showChart = false
      setTimeout(() => {
        this.showChart = true;
      }, 100);
    }
  }

  performActionOnChange(){

  }


  


}
