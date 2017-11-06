import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { PollService } from '../poll.service';
import { Poll } from '../poll';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  currentUser: User = new User();
  polls: Poll[] = []
  

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _pollService: PollService,
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    console.log(this.currentUser);
    this.getPolls();
  }


  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if (this.currentUser === null){
      this._router.navigateByUrl('/');
    }
  }

  getPolls(){
    this._pollService.index((polls) => this.polls = polls)
  }

  logout() {
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }


}
