import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BoardGameComponent } from './components/board-game/board-game.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BoardGameComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [HeaderComponent, FooterComponent, BoardGameComponent],
})
export class SharedModule {}
