import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName!: string;
  public password!: string;
  public formData!: FormGroup;

  constructor(private authService : AuthServiceService, private router : Router) { }

  ngOnInit() {
     this.formData = new FormGroup({
        userName: new FormControl("admin"),
        password: new FormControl("admin"),
     });
  }

  onClickSubmit(data: any) {
     this.userName = data.userName;
     this.password = data.password;

     console.log("Login page: " + this.userName);
     console.log("Login page: " + this.password);

     this.authService.login(this.userName, this.password)
        .subscribe( data => { 
           console.log("Is Login Success: " + data); 
     
          if(data) this.router.navigate(['/home']); 
     });
  }

}
