import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-result-dilogue',
  templateUrl: './result-dilogue.component.html',
  styleUrls: ['./result-dilogue.component.css'],
})
export class ResultDilogueComponent implements OnInit {
  getitemdata: any;
  constructor(private loginservice: ServiceService) {}

  ngOnInit(): void {
    this.getitemdata = JSON.parse(sessionStorage.getItem('resultdata') as any);
    console.log("cwe",this.getitemdata);
    
  }
}
