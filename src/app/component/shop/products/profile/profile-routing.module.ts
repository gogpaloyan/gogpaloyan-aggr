import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login/login/login.component";
import { RegisterComponent } from "./login/register/register.component";




const routes: Routes = [
    {path: 'profile', component: ProfileComponent, children:[
        {path: "login", component: LoginComponent},
        {path: "register", component: RegisterComponent}
    ]}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouterModule{}
