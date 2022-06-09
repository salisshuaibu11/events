import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  loginInvalid = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(formValue: any) {
    this.authService.loginUser(formValue.userName, formValue.password)
      .subscribe((response: any) => {
        if (!response) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events'])
        }
      })
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
