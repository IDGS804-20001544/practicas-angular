import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ResistenciaComponent } from './resistencia.component';
import {MatSelect, MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ResistenciaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  exports:[
    ResistenciaComponent
  ]
})
export class ResistenciaModule { }
