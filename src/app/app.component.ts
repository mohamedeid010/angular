import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members:string[] = [];
  errorMessage ='';
  numberOfTeams: Number | '' = "";
  teams: string[][]=[];


  onInput(member: string){
    this.newMemberName = member;
  }
  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  addMember(){
    if(!this.newMemberName)
    {
      this.errorMessage = "name is required";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams <= 0 )
    {
      this.errorMessage = "invalid number";
      return;
    }
    if(this.members.length  < this.numberOfTeams)
    {
      this.errorMessage = "number of member cant be less than teams number";
      return;
    }
    this.errorMessage = "";
    const allMember = [...this.members];
    while(allMember.length)
    {
      for(let i =0; i < this.numberOfTeams; i++)
      {
        const randomIndex = Math.floor(Math.random() * allMember.length);
        const member = allMember.splice(randomIndex,1)[0];
        if(!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';
    console.log(this.teams);
  }
 
}
