import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heoresService:HeroesService
  ) {
    this.activatedRoute.params.subscribe( params => {
      let idx = params['id'];
      console.log(idx);
      this.heroe = this._heoresService.getHeroe(idx);
    })
  }

}
