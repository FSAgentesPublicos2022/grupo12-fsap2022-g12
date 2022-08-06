import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ElFooterComponent } from './el-footer/el-footer.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    ElFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavMenuComponent,FooterComponent,ElFooterComponent]
    
})
export class LayoutModule { }
