import React, { Component } from 'react';
import EventListItem from './EventListItem';
class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h2>Event List</h2>
        {events.map(evenement => (
          <EventListItem
            key={evenement.id}
            deleteEvent={deleteEvent}
            eventChezEventList={evenement}
            onEventOpen={onEventOpen}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
