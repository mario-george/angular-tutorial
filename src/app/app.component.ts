import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tutorial-basics';
  showSecret = false;
  logs = [];
  onToggle() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
