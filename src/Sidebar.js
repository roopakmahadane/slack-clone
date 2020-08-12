import React, { useState, useEffect } from "react";
import db from "./firebase";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import "./Sidebar.css";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import SidebarOption from "./SidebarOption";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <div className="sidebar__name">
            <h2>Roopak's Chat Room</h2>
            <ExpandMoreSharpIcon />
          </div>

          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <div className="sidebar__create">
          <CreateIcon />
        </div>
      </div>
      <SidebarOption Icon={MessageSharpIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mention and reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People and user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption
        style={{ padding: "10px" }}
        Icon={ExpandMoreSharpIcon}
        title="Channels"
      />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
      {channels.map((channel) => {
        return (
          <SidebarOption
            key={channel.id}
            title={channel.name}
            id={channel.id}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
