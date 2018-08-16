import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {
    const { eventChezEventList } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={eventChezEventList.hostPhotoURL}
              />
              <Item.Content>
                <Item.Header as="a">{eventChezEventList.title}</Item.Header>
                <Item.Description>
                  Organisé par <a>{eventChezEventList.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {eventChezEventList.date} |
            <Icon name="marker" />
            {eventChezEventList.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {eventChezEventList.attendees.map(attendee => (
              <EventListAttendee key={attendee.id} participants={attendee} />
            ))};
          </List>
        </Segment>
        <Segment clearing>
          <span>{eventChezEventList.description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
