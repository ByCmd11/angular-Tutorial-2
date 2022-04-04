import { Component } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})

export class HeroFormComponent {
  powers = ['Really Smart', 'SuperFlexible', 'Super hot', 'Weather changer'];

  model = new Hero(18, 'Dr Iq', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
