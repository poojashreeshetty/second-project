import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-http-customer',
  templateUrl: './http-customer.component.html',
  styleUrls: ['./http-customer.component.css']
})
export class HttpCustomerComponent implements OnInit {
users:any;
  constructor(private customService:DemoService) { }

  ngOnInit(): void {
this.customService.getUsers().subscribe((data)=>{
  // console.log(data)
  this.users=data;
},(err)=>{
  console.log("unable to get data fro url"+err)
});
  }

}
