import { Component } from '@angular/core';
import { EventsService } from './shared/services/events.service';
import { EventDto } from './shared/models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chaos-website';
  events: EventDto[] = [];

  constructor(private eventsService: EventsService) {
    this.eventsService.getEvents().subscribe(events => this.events = events);
  }
}
