import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    // Verificar las credenciales (por ejemplo, usuario "admin" y contraseña "1234")
    if (this.username === 'admin' && this.password === 'admin') {
      // Credenciales válidas, navegar a la página de inicio
      this.router.navigate(['/inicio', { username: this.username }]);
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      alert('Ingresa el nombre de usuario');
    }
  }

  goToRecuperarContrasena() {
    // Navegar a la página de recuperación de contraseña
    this.router.navigate(['/recuperar-contrasena']);
  }
}

