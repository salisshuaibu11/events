import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern("[a-zA-Z].*")]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      [Validators.required, Validators.pattern("[a-zA-Z].*")]
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success("Profile Saved");
        })
    }

    //this.router.navigate(['events'])
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.touched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.touched;
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
