import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-submit-dilog',
  templateUrl: './submit-dilog.component.html',
  styleUrls: ['./submit-dilog.component.css'],
})
export class SubmitDilogComponent implements OnInit {
  time: any;
  getstore: any;

  constructor(
    private router: Router,
    private loginservice: ServiceService,
    private dialogRef: MatDialogRef<SubmitDilogComponent>
  ) {}

  ngOnInit(): void {
    this.time = sessionStorage.getItem('sec');
    this.getstore = sessionStorage.getItem('store');
    console.log('bb', this.getstore);
  }

  clicktoSubmit() {
    this.router.navigate(['/congrats']);
    this.dialogRef.close();
    this.loginservice.postresultService().subscribe((data) => {
      console.log(data);
    });
  }
  closecancel() {
    this.dialogRef.close();
  }
}
