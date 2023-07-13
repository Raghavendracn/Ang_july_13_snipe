import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations:[AppComponent, HomeComponent, AboutusComponent, DashboardComponent, ServicesComponent, TemplateComponent, ReactiveComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
    providers:[]
})

export class AppModule {}