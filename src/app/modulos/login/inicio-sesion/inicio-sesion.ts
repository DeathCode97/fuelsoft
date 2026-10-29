import { Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../../services/loading.service';

@Component({
  imports: [
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule],
  selector: 'app-inicio-sesion',
  styleUrl: './inicio-sesion.css',
  templateUrl: './inicio-sesion.html',
})
export class InicioSesion {

  private loadingService = inject(LoadingService);


  loginForm: FormGroup;
  hidePassword = signal(true);
  // isLoading = signal(false);
  isLoading = this.loadingService.isLoading;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword.update((value: any) => !value);
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    const { username, password, rememberMe } = this.loginForm.value;
    // Simulación de autenticación segura
    setTimeout(() => {
      console.log('Datos enviados:', { username, rememberMe });
      this.isLoading.set(false);
      console.log();
      
      // Aquí rediriges a tu ruta protegida ej: this.router.navigate(['/dashboard']);
    }, 5000);
  }

  onForgotPassword() {
    // Lógica para recuperación de contraseña
    console.log('Solicitud de recuperación de contraseña');
  }
}
 