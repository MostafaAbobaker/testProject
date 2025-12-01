import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UsersService } from './services/users.service';
import { Subscription } from 'rxjs';
import { Users } from './interface/users';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxPermissionsModule } from 'ngx-permissions';

@Component({
  selector: 'app-users',
  imports: [TableModule,RouterModule,ToastModule, NgxPermissionsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [MessageService]
})
export class UsersComponent implements OnInit, OnDestroy{
  usersList: Users[] = [];

  PageNumber = 0;
  PageSize = 5;
  first = 0;
  loading = false;
  totalRecords: number = 0;

  userSupscrption: Subscription | undefined;

  constructor(private _usersService:UsersService,private messageService: MessageService){}
  
  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userSupscrption = this._usersService.getUsers().subscribe({
      next:(data)=>{
        this.usersList = data;
        console.log(data);
      } , error:(err)=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message,sticky: true });
      }
    })
  }

  retryCall(){
    this.getUsers();
     this.messageService.clear('confirm');
  }

    ngOnDestroy(): void {
      if(this.userSupscrption){
        this.userSupscrption.unsubscribe();
      }
  }
}
