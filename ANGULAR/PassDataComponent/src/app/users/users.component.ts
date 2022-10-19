import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input() current:string="";
@Input() childFood:any;
@Input() nameData:any;
@Output() updated=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
