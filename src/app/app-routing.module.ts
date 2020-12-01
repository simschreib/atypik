import { Routes, RouterModule } from '@angular/router';

import { Role } from './_models';

import { AuthGuard } from './_helpers';
import { Auth2Guard } from './_helpers';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { LandlordComponent } from './landlord/landlord/landlord.component';
import { LambdaComponent } from './lambda/lambda/lambda.component';

import { ModifyParametersComponent } from './admin/modify-parameters/modify-parameters.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminHouseComponent } from './admin/admin-house/admin-house.component';
import { LandlordModifyHouseComponent } from './landlord/landlord-modify-house/landlord-modify-house.component';
import { LandlordModifyProfilComponent } from './landlord/landlord-modify-profil/landlord-modify-profil.component';
import { LandlordManageReservationComponent } from './landlord/landlord-manage-reservation/landlord-manage-reservation.component';
import { SearchComponent } from './lambda/search/search.component';
import { HouseComponent } from './lambda/house/house.component';
import { HomeComponent } from './lambda/home/home.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { ReservationsComponent } from './user/reservations/reservations.component';
import { UserReserveComponent } from './user/user-reserve/user-reserve.component';

import { FooterComponent } from './template/footer/footer.component';
import { CguComponent } from './common/cgu/cgu.component';
import { LegalsMentionsComponent } from './common/legals-mentions/legals-mentions.component';




const routes: Routes = [

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }, children:[
    { path: 'parameters', component: ModifyParametersComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
    { path: '', component: ModifyParametersComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]},  pathMatch: 'full' },
    { path: 'users', component: AdminUserComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
    { path: 'houses', component: AdminHouseComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  ]},

  { path: 'landlord', component: LandlordComponent, canActivate: [AuthGuard], data: { roles: [Role.Landlord] }, children:[
    { path: 'modify', component: LandlordModifyHouseComponent, canActivate: [AuthGuard], data: { roles: [Role.Landlord]}},
    { path: 'profil', component: LandlordModifyProfilComponent, canActivate: [AuthGuard], data: { roles: [Role.Landlord]}},
    { path: '', component: LandlordModifyProfilComponent, canActivate: [AuthGuard], data: { roles: [Role.Landlord]},  pathMatch: 'full' },
    { path: 'reservations', component: LandlordManageReservationComponent, canActivate: [AuthGuard], data: { roles: [Role.Landlord]}},
  ]},

  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: [Role.User] }, children:[
    { path: 'reserve', component: UserReserveComponent, canActivate: [AuthGuard], data: { roles: [Role.User] }},
    { path: 'profil', component: UserProfilComponent, canActivate: [AuthGuard], data: { roles: [Role.User] }},
    { path: '', component: UserProfilComponent, canActivate: [AuthGuard], data: { roles: [Role.User],  pathMatch: 'full'  }},
    { path: 'reservations', component: ReservationsComponent, canActivate: [AuthGuard], data: { roles: [Role.User] }},
  ]},

  { path: '', component: LambdaComponent, children:[
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', canActivate: [Auth2Guard], data: { roles: ["USER"] }, component: HomeComponent, pathMatch: 'full'  },
    { path: 'search', canActivate: [Auth2Guard], data: { roles: ["USER"] }, component: SearchComponent},
    { path: 'house/:id',canActivate: [Auth2Guard], data: { roles: ["USER"] }, component: HouseComponent},
  ]},
  { path: 'cgu', component: CguComponent },

];


export const appRoutingModule = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled',
});
