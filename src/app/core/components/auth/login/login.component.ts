import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import {  ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ,ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginComponent implements OnDestroy {

  loginSupscrption: Subscription | undefined;

  constructor(  private _authService: AuthService,
                private messageService: MessageService ,
                private router: Router,
                private permissionsService: NgxPermissionsService) { }

  /* Login form group with email and password controls */
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  /* Login method that checks form validity and subscribes to auth service login */
  login(){
    if(this.loginForm.valid){
      
      localStorage.setItem('appTest-email', this.loginForm.value.email); // save data in local storage

      this.permissionsService.loadPermissions(['ADMIN']); // Add Permissions Role 'ADMIN' : 'USER'
      localStorage.setItem('appTest-role', 'ADMIN'); // Save Permissions Role in Local Storage
      
      this.router.navigate(['/']);

      /* Call auth service login method with form values */
      /* this.loginSupscrption = this._authService.login(this.loginForm.value).subscribe({
        next: (res : any) => {
          console.log(res);
          localStorage.setItem('appTest-token', res.token);
          const role = res.role.toUpperCase();
          this.permissionsService.loadPermissions([role]); // Add Permissions Role in NgxPermissions
          localStorage.setItem('appTest-role', role); // Save Permissions Role in Local Storage
                this.router.navigate(['/']);

        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
          console.log(err);
        }
      }) */
    }
  }

 

  /* Unsubscribe from login subscription on component destroy */
  ngOnDestroy(): void {
    if(this.loginSupscrption){
      this.loginSupscrption.unsubscribe();
    }
     
  }
}
