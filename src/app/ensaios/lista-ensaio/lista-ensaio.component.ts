import { EnsaioServiceService } from './../ensaio/ensaio-service.service';
import { Component } from '@angular/core';
import { Ensaio } from '../ensaio/ensaio';

@Component({
  selector: 'app-lista-ensaio',
  templateUrl: './lista-ensaio.component.html',
  styleUrls: ['./lista-ensaio.component.css']
})
export class ListaEnsaioComponent {
  constructor(private ensaioService: EnsaioServiceService) { }

  public ensaios: Ensaio[] = [];

  ngOnInit(): void{
    this.ensaioService.listarEnsaios()
      .subscribe({ next:
        ensaios => {
          this.ensaios = ensaios;
          console.log(ensaios);
        },
        error: e => console.log(e)
  });
  }
}
