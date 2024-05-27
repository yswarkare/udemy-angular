import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [AlertComponent, PlaceholderDirective, DropdownDirective],
  exports: [AlertComponent, PlaceholderDirective, DropdownDirective],
})
export class SharedModule {}
