import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpol',
  templateUrl: './interpol.component.html',
  styleUrls: ['./interpol.component.css']
})
export class InterpolComponent implements OnInit {
public name="shetty";
public myId="testId";
public isDisabled=false;
public successClass="text-success";
public isEmpl=true;
public isSpecial=true;
// public messageClasses={
//   "text-success":this.isEmpl,
//   "text-danger":this.isEmpl,
//   "text-traial":this.isEmpl,
//   "text-special":this.isSpecial
// };
public hasError=true;
public highColor="blue";
public multiSTyle={
  color:"pink",
  fontStyle:"italic",

};
public greeting="";
  constructor() { }

  ngOnInit(): void {
  }
//  greetUser()
//  {
//   return "new" + this.name
//  }

onClick(event:any){
  console.log(event);
  this.greeting="welcome to code"
}

logMessage(value:any){
  console.log(value)
}

}
