import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { appRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppComponent } from './app.component';
import { HomeComponent } from './lambda/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components';
import{ VariablesGlobales } from './variablesGlobales';
import { ModifyParametersComponent } from './admin/modify-parameters/modify-parameters.component';
import { ModifyUserComponent } from './admin/modify-user/modify-user.component';
import { ModifyHouseComponent } from './admin/modify-house/modify-house.component';
import { LandlordModifyHouseComponent } from './landlord/landlord-modify-house/landlord-modify-house.component';
import { LandlordModifyProfilComponent } from './landlord/landlord-modify-profil/landlord-modify-profil.component';
import { LandlordManageReservationComponent } from './landlord/landlord-manage-reservation/landlord-manage-reservation.component';
import { SearchComponent } from './lambda/search/search.component';
import { HouseComponent } from './lambda/house/house.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { ReservationsComponent } from './user/reservations/reservations.component';
import { UserReserveComponent } from './user/user-reserve/user-reserve.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { LandlordComponent } from './landlord/landlord/landlord.component';
import { LambdaComponent } from './lambda/lambda/lambda.component';
import { NavlinksComponent } from './template/navlinks/navlinks.component';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';

// carousel
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {CarouselModule} from "ngx-carousel-lib";
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    InfiniteScrollModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    FlexLayoutModule,
    FlexLayoutServerModule,

    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    IvyCarouselModule,
    CarouselModule,
    NguCarouselModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ModifyParametersComponent,
    ModifyUserComponent,
    ModifyHouseComponent,
    LandlordModifyHouseComponent,
    LandlordModifyProfilComponent,
    LandlordManageReservationComponent,
    SearchComponent,
    HouseComponent,
    UserProfilComponent,
    ReservationsComponent,
    UserReserveComponent,
    AdminComponent,
    UserComponent,
    LandlordComponent,
    LambdaComponent,
    NavlinksComponent,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    VariablesGlobales,

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
