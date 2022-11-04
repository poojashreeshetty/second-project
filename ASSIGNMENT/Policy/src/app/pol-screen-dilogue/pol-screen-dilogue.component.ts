import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { PolicyServiceService } from '../policy-service.service';

@Component({
  selector: 'app-pol-screen-dilogue',
  templateUrl: './pol-screen-dilogue.component.html',
  styleUrls: ['./pol-screen-dilogue.component.css'],
})
export class PolScreenDilogueComponent implements OnInit {
  // detailData:string[]=['username','employrcode','emailid']
  details: any;
  constructor(
    private formbuilder: FormBuilder,
    private superService: PolicyServiceService
  ) {}
  superadminForm!: FormGroup;
  ngOnInit(): void {
    this.superadminForm = this.formbuilder.group({
      username: ['', Validators.required],
      employrcode: ['', Validators.required],
      emailid: ['', Validators.required],
    });

    this.getAllDetail();
  }

  addDetails() {
    // console.log(this.superadminForm.value);
    if (this.superadminForm.valid) {
      this.superService.postDetail(this.superadminForm.value).subscribe({
        next: (res) => {
          this.superService.getDetail().subscribe((data)=>{
            this.details=data;
          });
          alert('details added');
          this.superadminForm.reset();
        },
        error: (err) => {
          alert('error while adding details');
        },
      });
    }
  }

  getAllDetail() {
    this.superService.getDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.details=res;
      },
      error: (err) => {
        alert('error');
      },
    }
    );
  }
}






// (data)=>{
//   this.details=data;
// }
