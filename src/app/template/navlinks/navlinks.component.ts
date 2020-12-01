import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { User } from '../../_models';
import { Router } from '@angular/router';
import { Role } from '../../_models';


@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.css']
})
export class NavlinksComponent implements OnInit {
  @Input('type') type: string;
  currentUser: User;
  Role = Role;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.authenticationService.currentUserObs().subscribe(data =>{
      this.currentUser = data;
    })
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }


}
