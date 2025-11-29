import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UsersService } from './services/users.service';
import { Subscription } from 'rxjs';
import { Users } from './interface/users';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [TableModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy{
  usersList: Users[] = [];
  PageNumber = 0;
  PageSize = 5;
  first = 0;
  loading = false;
  totalRecords: number = 0;

  userSupscrption: Subscription | undefined;
  constructor(private _usersService:UsersService){}
  
  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userSupscrption = this._usersService.getUsers().subscribe({
      next:(data)=>{
        this.usersList = data;
        console.log(data);
      } , error:(err)=>{
        console.log(err);
      }
    })
  }

 

    ngOnDestroy(): void {
    if(this.userSupscrption){
      this.userSupscrption.unsubscribe();
    }
  }
}
