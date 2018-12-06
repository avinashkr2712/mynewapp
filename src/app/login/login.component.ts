import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor(private router: Router) { }
  username: string;
  password: string;
    ngOnInit() {
    }
    loginUser() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["/home"]);
      }else {
        alert("Invalid credentials");
      }
    }
    }
  
