import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router, private http: HttpClient) {}
  @Input() moduleName: string = '';

  showPeringatanModal(message: string): void {
    $('#peringatanModal').modal();
    $('#pm_message').html(message);
  }

  logOut(): void {
    console.log('logOut');

    var userId = $('#idText').val();
    userId = encodeURIComponent(userId);

    var password = $('#passwordText').val();
    password = encodeURIComponent(password);

    var url =
      'https://stmikpontianak.net/011100862/login.php' +
      '?id=' +
      userId +
      '&password=' +
      password;

    console.log('url :  ' + url);

    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      var row = data[0];

      sessionStorage.removeItem('userId', userId);

      console.log('session data berhasil dihapus');

      this.router.navigate(['/dashboard']);
    });
  }
}
