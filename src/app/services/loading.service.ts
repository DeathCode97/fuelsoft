import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private activeRequests = 0;
  public isLoading = signal(false);

  show() {
    this.activeRequests++;
    this.isLoading.set(true);
  }

  hide() {
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }
    if (this.activeRequests === 0) {
      this.isLoading.set(false);
    }
  }
}