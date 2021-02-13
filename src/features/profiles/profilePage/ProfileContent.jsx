import React from "react";
import { Tab } from "semantic-ui-react";
import AboutTab from "./AboutTab";
import EventsTab from "./EventsTab";
import PhotosTab from "./PhotosTab";
import FollowingTab from "./FollowingTab";

export default function ProfileContent({ profile, isCurrentUser }) {
  const panes = [
    {
      menuItem: "About",
      render: () => (
        <AboutTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    {
      menuItem: "Photos",
      render: () => (
        <PhotosTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: "Events", render: () => <EventsTab profile={profile} /> },
    { menuItem: "Followers", render: () => <FollowingTab profile={profile} /> },
    { menuItem: "Following", render: () => <Tab.Pane>Following</Tab.Pane> },
  ];
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      panes={panes}
      menuPosition="right"
    />
  );
}
