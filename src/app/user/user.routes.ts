import { Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile/profile.component";
import { LoginComponent } from "./login/login.component";

export const userRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent}
]
