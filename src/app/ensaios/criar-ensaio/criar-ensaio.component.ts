import { EnsaioServiceService } from './../ensaio/ensaio-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ensaio } from '../ensaio/ensaio';

@Component({
  selector: 'app-criar-ensaio',
  templateUrl: './criar-ensaio.component.html',
  styleUrls: ['./criar-ensaio.component.css']
})
export class CriarEnsaioComponent {

  ensaio: Ensaio = {
    
    lider: '',
    cancoes: '',
    integrantes: '',
    horario: null,
    data: '',

  }
  constructor(private service: EnsaioServiceService,
    private router: Router
    ) { }

  criarEnsaio(){
    this.service.criarEnsaio(this.ensaio).subscribe(() => {
      this.router.navigate(['/listarEnsaio'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarEnsaio'])
   }

}
