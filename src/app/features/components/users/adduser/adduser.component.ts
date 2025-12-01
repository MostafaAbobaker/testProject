import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adduser',
  imports: [RouterModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent {
  userID!: string | null;
  constructor(private _activatedRoute: ActivatedRoute) {
    this.userID = this._activatedRoute.snapshot.paramMap.get('id');
  }

}
