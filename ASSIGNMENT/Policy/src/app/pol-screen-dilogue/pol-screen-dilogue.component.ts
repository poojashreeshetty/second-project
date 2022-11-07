import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { PolicyServiceService } from '../policy-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pol-screen-dilogue',
  templateUrl: './pol-screen-dilogue.component.html',
  styleUrls: ['./pol-screen-dilogue.component.css'],
})
export class PolScreenDilogueComponent implements OnInit {
  // detailData:string[]=['username','employrcode','emailid']
  details: any;
  editMode: boolean = false;
  superId: any;
  currentSuper: any;
  constructor(
    private formbuilder: FormBuilder,
    private superService: PolicyServiceService,
    public dialog: MatDialog
  ) {}
  superadminForm!: FormGroup;

  //using ngmodel
  // ngOnInit(): void {
  //   this.superadminForm = this.formbuilder.group({
  //     username: ['', Validators.required],
  //     employrcode: ['', Validators.required],
  //     emailid: ['', Validators.required],
  //     isDisabled: [true]

  //   });

  //   this.getAllDetail();
  // }

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
    // if (this.superadminForm.valid) {
    //   this.superService.postDetail(this.superadminForm.value).subscribe({
    //     next: (res) => {
    //       this.superService.getDetail().subscribe((data) => {
    //         this.details = data;
    //         console.log(this.details);

    //       });
    //       alert('details added');
    //       this.superadminForm.reset();
    //     },
    //     error: (err) => {
    //       alert('error while adding details');
    //     },
    //   });
    // }
    if (this.superadminForm.valid && !this.editMode) {
      this.superService
        .postDetail(this.superadminForm.value)
        .subscribe((res) => {
          console.log(res);
          this.superadminForm.reset();

          alert('details added');
          this.getAllDetail();
        });
    } else {
      this.superService
        .editSuper(this.superadminForm.value, this.superId)
        .subscribe((data) => {
          this.getAllDetail();
          this.editMode = false;
        });
    }
  }

  getAllDetail() {
    this.superService.getDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.details = res;
      },
      error: (err) => {
        alert('error');
      },
    });
  }

  //using ngmodel
  //edit produc
  // editProduc(admin: any) {
  //   console.log(admin);
  //   admin.isDisabled = false;
  //   console.log(this.details);
  // }
  // updateProduc(admin: any) {
  //   console.log(admin);
  //   admin.isDisabled = true;
  //   console.log(admin);

  //   this.superService.update(admin.id, admin).subscribe((res) => {
  //     console.log(res);
  //     this.getAllDetail();

  //   })
  // }

  // deleteProduc(admin: any) {
  //   this.superService.delete(admin.id).subscribe((res) => {
  //     console.log(res);
  //     this.getAllDetail();

  //   })
  // }

  //another
  editSuperAdmin(id: any) {
    this.superId = id;
    this.editMode = true;
    this.currentSuper = this.details.find((d: any) => {
      return d.id == id;
    });
    console.log(this.currentSuper);
    this.superadminForm.setValue({
      username: this.currentSuper.username,
      employrcode: this.currentSuper.employrcode,
      emailid: this.currentSuper.emailid,
    });
  }

  deleteSuperAdmin(id: any) {
    this.superService.delete(id).subscribe((data) => {
      this.getAllDetail();
    });
  }
}

// (data)=>{
//   this.details=data;
// }
