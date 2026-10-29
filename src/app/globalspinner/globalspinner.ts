import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-global-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    @if (loadingService.isLoading()) {
      <div class="global-loading-overlay">
        <mat-spinner diameter="50"></mat-spinner>
        <span class="loading-text">Cargando, por favor espere...</span>
      </div>
    }
  `,
  styles: [`
    .global-loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      gap: 16px;
      color: #ffffff;
      font-family: inherit;
      font-weight: 500;
      font-size: 1rem;
    }
  `]
})
export class Globalspinner {
  loadingService = inject(LoadingService);
}