import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  /* template: '<app-server></app-server><app-server></app-server>', */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCrationStatus: String = 'No server was created!';
  serverName: String = "Testserver";
  serverCreated: Boolean = false;

  constructor() {
    /* Constructor is just a method executed by the point of time this component is created by Angular */
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2500);
  }

  ngOnInit() {}
  onCreateServer() {
    /* When namig DeclareFunctionStmt, the On prefix means that this is triggered by something from the template */
    this.serverCreated = true;
    this.serverCrationStatus =  "The server was created! Name is " + this.serverName
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
