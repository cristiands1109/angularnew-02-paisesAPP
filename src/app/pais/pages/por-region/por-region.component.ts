import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paise.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  button {
    margin-right: 5px;
  }`
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  // hayError: boolean = false;

  getClaseCSS (region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {

    if(region === this.regionActiva){
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getRegion(this.regionActiva).subscribe( paises =>{
      this.paises = paises;
      console.log(paises);
    }, (error) => {
      // this.hayError = true;
      this.paises = [];
    })
    
  }


}
