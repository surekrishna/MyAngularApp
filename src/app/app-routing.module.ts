import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

const appRoutes : Routes = [
    {path : 'register-user', component: RegisterUserComponent},
    {path : 'login-user', component : LoginUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [RegisterUserComponent,LoginUserComponent];