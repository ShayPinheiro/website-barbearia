import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Cliente {
  id: number,
  servico: number,
  cliente: string,
  contato: string
}

enum Servico {
  'Cabelo',
  'Barba',
  'Combo'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barbearia';
  url: string = 'http://lucasreno.kinghost.net/barbearia';
  fila: Cliente[] = [];
  servicos: typeof Servico = Servico;

  constructor(
    public http: HttpClient,
  ) {
    this.pegarDados();
  }

  ngOnInit() {
    setInterval(
      () => {
        this.pegarDados();
      }
      , 10000
    )
  }

  pegarDados() {
    this.http.get<Cliente[]>(this.url).subscribe(
      (resposta: Cliente[]) => {
        this.fila = resposta;
      }
    );
  }

}