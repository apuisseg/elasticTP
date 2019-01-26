import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private name:string='';
  private password:string='';
  private errorMessage:string = '';
  constructor(private router: Router) { }

  ngOnInit() {

  }
  
  
  onSubmit(){
    this.errorMessage = '';
    console.log(this.name);
    console.log(this.password);
    if(this.name === 'admin' && this.password === 'admin'){
      localStorage.setItem('token','tokenpete');
      this.router.navigate(['/episodes']);
    } else {
      this.errorMessage = 'Bad login or password';
    }
  }

}
