import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-module-test',
  templateUrl: './module-test.component.html',
  styleUrls: ['./module-test.component.css']
})
export class ModuleTestComponent implements OnInit {

  constructor(private loginservice: ServiceService) { }

  ngOnInit(): void {
    this.loginservice.gotosecondService().subscribe((data)=>{
      console.log("quizzz",data);
      
    })
      
  }

}
