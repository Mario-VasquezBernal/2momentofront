import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
 // ✅ Importa el environment

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendNotification(message: string, type: string): Observable<any> {
    const payload = {
      message,
      type,
      created_at: new Date().toISOString()
    };
    // Ajusta "/notifications" si tu backend espera esa ruta
    return this.http.post(`${this.apiUrl}/notifications`, payload);
  }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/notifications`);
  }
}
