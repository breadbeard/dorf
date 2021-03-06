import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomStyleService } from '@core/service/random-style-service';

@Component({
  selector: 'app-dorf',
  templateUrl: './dorf.component.html',
  styleUrls: ['./dorf.component.scss'],
})
export class DorfComponent implements OnInit {
  constructor(private rss: RandomStyleService, private router: Router) {}

  ngOnInit(): void {
    this.randomizeStyles();
  }

  primaryStyle(): any {
    return {
      color: `rgb(${[...this.rss.rgbPrimary]})`,
    };
  }

  randomizeStyles() {
    this.rss.randomize();
  }

  gotoGames() {
    this.router.navigate([`/what`]);
  }
}
