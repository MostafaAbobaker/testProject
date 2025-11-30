import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Users } from '../interface/users';
import { Subscription } from 'rxjs';
import { AccordionModule } from 'primeng/accordion';
import { Post } from '../interface/post';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-details',
  imports: [RouterModule, AccordionModule,CommonModule,ToastModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  providers: [MessageService]

})
export class UserDetailsComponent  {
  userID: string | null;
  posts: Post[] = [];
  userDetails: Users = {} as Users;

  userSupscrption: Subscription | undefined;
  postSupscrption: Subscription | undefined;
  
  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute, private _postService: PostService,private messageService: MessageService) {
    this.userID = this._activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
   this.getUsersDetails()
   this.getPostsByUserId()
    
  }
  getUsersDetails(){
    this.userSupscrption = this._usersService.getUsers().subscribe({
      next:(data)=>{
        this.userDetails = data.find((user)=>user.id == Number(this.userID)) || {} as Users ;
        console.log(this.userDetails);
      } , error:(err)=>{
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });


      }
    })
  }

  getPostsByUserId(){
    this.postSupscrption = this._postService.getPostByUserId(Number(this.userID)).subscribe({
      next:(data)=>{
        this.posts = data as Post[];
        console.log(this.posts);
      } , error:(err)=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
      }
    })
  }
  ngOnDestroy(): void {
    if(this.userSupscrption){
      this.userSupscrption.unsubscribe();
    }
    if(this.postSupscrption){
      this.postSupscrption.unsubscribe();
    }
  }
}
