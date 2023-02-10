import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ensaio } from '../ensaio/ensaio';
import { EnsaioServiceService } from '../ensaio/ensaio-service.service';

@Component({
  selector: 'app-editar-ensaio',
  templateUrl: './editar-ensaio.component.html',
  styleUrls: ['./editar-ensaio.component.css']
})
export class EditarEnsaioComponent {
  ensaio: Ensaio = {
    
    id:0,
    lider: '',
    cancoes: '',
    integrantes: '',
    horario: null,
    data: '',

  }
  constructor(private service: EnsaioServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      console.log(id)
      this.service.buscarEnsaioPorId(parseInt(id!))
      .subscribe({ next:
        ensaio => {
          this.ensaio = ensaio;
          console.log(ensaio);
        },
        error: e => console.log(e)
  });
    }
  
    editarEnsaio() {
      this.service.editarEnsaio(this.ensaio).subscribe(() => {
        this.router.navigate(['/listarEnsaio'])
      })
    }

    cancelar(){
      this.router.navigate(['/listarEnsaio'])
     }
}
