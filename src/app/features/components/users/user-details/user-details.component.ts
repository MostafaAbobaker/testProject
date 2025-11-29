import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Users } from '../interface/users';
import { Subscription } from 'rxjs';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-user-details',
  imports: [RouterModule, AccordionModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent  {
  userID: string | null;

  userDetails: Users = {} as Users;

  userSupscrption: Subscription | undefined;
  
  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute) {
    this.userID = this._activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
   this.getUsersDetails()
    
  }
  getUsersDetails(){
    this.userSupscrption = this._usersService.getUsers().subscribe({
      next:(data)=>{
        this.userDetails = data.find((user)=>user.id == Number(this.userID)) || {} as Users ;
        console.log(this.userDetails);
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
