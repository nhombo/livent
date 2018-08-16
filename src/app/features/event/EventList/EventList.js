import React, { Component } from 'react';
import EventListItem from './EventListItem';
class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h2>Event List</h2>
        {events.map(evenement => (
          <EventListItem key={evenement.id} eventChezEventList={evenement} />
        ))};
      </div>
    );
  }
}

export default EventList;
