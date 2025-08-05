import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,

})
export class HomeComponent {

}
