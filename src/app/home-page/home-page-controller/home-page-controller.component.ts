import { Component, OnInit } from '@angular/core';
import {Languages} from '../models/temp-languages.enum';
import {Snippet} from '../models/snippet';

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {

  snippets = [
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
    new Snippet('my music', 'run man', 'let king=true;', Languages.typscript),
  ];


  constructor() {
  }

  ngOnInit() {
  }
}


