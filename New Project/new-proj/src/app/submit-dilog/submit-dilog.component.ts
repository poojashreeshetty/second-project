import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-dilog',
  templateUrl: './submit-dilog.component.html',
  styleUrls: ['./submit-dilog.component.css']
})
export class SubmitDilogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clicktoSubmit(){
    
    this.router.navigate(['/congrats'])
    
  }
}
