import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../interface/users';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(usersList: Users[], text:string): Users[] {
    if(!usersList || !text) {
      return usersList;
    }
    return usersList.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
  }

}
