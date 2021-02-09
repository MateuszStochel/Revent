import React from "react";
import { useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

const EventDetailedPage = ({ match }) => {
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  console.log(event);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <GridColumn width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </GridColumn>
    </Grid>
  );
};

export default EventDetailedPage;
