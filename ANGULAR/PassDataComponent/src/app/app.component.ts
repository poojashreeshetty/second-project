import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentName:any;
  transfer(name:any){
    this.parentName=name;
  }
  title = 'PassDataComponent';
  beverage="tea";
  food={
    juice: "mango-juice",
    breakfast:"dosa",
    lunch:"ricesambbar"

}
}
