import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      name: "User 1",
      username: "User 1",
      email: "User1@gmail.com",
    },
    {
      name: "User 2",
      username: "User 2",
      email: "User2@gmail.com",
    },
    {
      name: "User 3",
      username: "User 3",
      email: "User3@gmail.com",
    },
    {
      name: "User 4",
      username: "User 4",
      email: "User4@gmail.com",
    },
    {
      name: "User 5",
      username: "User 5",
      email: "User5@gmail.com",
    },
    {
      name: "User 6",
      username: "User 6",
      email: "User6@gmail.com",
    },
  ]

  show=true;

  delete(i:number){
   this.users.splice(i,1);
   if(!this.users.length){
     this.show=false;
   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
