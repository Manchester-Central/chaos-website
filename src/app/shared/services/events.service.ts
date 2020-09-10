import { Injectable } from '@angular/core';
import { GoogleSheetsService } from './google-sheets.service';
import { EventDto } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly eventSheetId = '13-Z5PjDyn0iAPHWJS5eUCPLW0uLqaV2B1gG23vDercs';

  constructor(private gSheets: GoogleSheetsService) { }

  getEvents() {
    return this.gSheets.getSheet<EventDto>(this.eventSheetId);
  }
}
