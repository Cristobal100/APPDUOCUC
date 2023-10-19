import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const usernameParam = this.route.snapshot.paramMap.get('username');
    if (usernameParam !== null) {
      this.username = usernameParam;
    } else {
      // Manejar el caso en el que 'username' es null, por ejemplo, mostrar un mensaje de error o redirigir a otra página.
      console.error("Nombre de usuario no especificado");
    }
  }
}
