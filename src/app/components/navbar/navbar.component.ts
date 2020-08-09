import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../service/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public get isLoggedIn() {
    return this.tokenStorageService.isLoggedIn;
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['']);
  }

  onMyAccount() {
    this.router.navigate(['profile']);
  }
}
