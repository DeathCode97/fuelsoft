import { Component } from '@angular/core';
import { RouterOutlet }from '@angular/router';
import { Navbar } from '../navbar/navbar';
@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-principal',
  styleUrl: './principal.css',
  templateUrl: './principal.html',
})
export class Principal {}
