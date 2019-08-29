import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ FormsModule, MatDialogModule ],
  declarations: [ HelloComponent ],
  entryComponents: [ HelloComponent ]
})
export class LazyModule {
  constructor(private dialog: MatDialog) {
    this.dialog.open(HelloComponent);
  }
 }
