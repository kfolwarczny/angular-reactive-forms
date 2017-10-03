import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersContainerComponent } from './users/users.container';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './users/user/user.container';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  {
    path: 'user/:id',
    component: UserContainerComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserContainerComponent,
    UsersContainerComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    BrowserModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
