import { Component, OnInit } from '@angular/core';
import { EventDto } from '../shared/models/event.model';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: EventDto[] = [];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      // filter out events that have already passed
      this.events = events.filter(event => new Date(event.date) > new Date());
    });
  }

}
