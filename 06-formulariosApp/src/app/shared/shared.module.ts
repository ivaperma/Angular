import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  
// Lo que queremos que sea público fuera de este módulo  
  exports:[
    SidemenuComponent
  ]
})
export class SharedModule { }
