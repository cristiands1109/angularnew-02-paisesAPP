import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paise.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    
  }


  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe((paises)=>{
      this.paises = paises;
      console.log(this.paises); 
    }, (error) =>{
      this.hayError = true;
      this.paises = [];
    })

  }

  sugerencias(termino: string) {

    this.hayError = false;

  }

}
