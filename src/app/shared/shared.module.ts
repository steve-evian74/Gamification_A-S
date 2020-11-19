import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material';
import { HeaderComponent, FooterComponent } from '../components';


export const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
];
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    COMPONENTS
  ]
})

export class SharedModule {}
