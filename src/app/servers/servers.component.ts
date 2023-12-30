import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  serverId = 10;
  serverStatus = 'online';
  allowNewServer = false;
  serverCreationMessage = 'no server was created';
  serverName = '';
  username = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationMessage =
      'Server was created ' + 'Name is ' + this.serverName;
  }

  onInuptHandler(event: Event) {
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
