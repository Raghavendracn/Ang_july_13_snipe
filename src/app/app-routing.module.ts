import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ServicesComponent } from './services/services.component'


const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about", component:AboutusComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"services", component:ServicesComponent},
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule {}