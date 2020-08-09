import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChannels } from "../actions/ServerActions";
import { Link, useParams } from "react-router-dom";

const Channels = () => {

  const {serverId} = useParams();
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels[0]);


  useEffect(() => {
    dispatch(getChannels(serverId));
  }, [serverId]);

  if (channels) {
    return (
      <>
        {channels.channel.map((channel) => {
          return (
            <p key={channel.id}>
              <Link to={`/home/${serverId}/${channel.id}`}>
                {channel.name}
              </Link>
            </p>
          );
        })}
      </>
    );
  } else {
    return <h1>Server List</h1>;
  }
};

export default Channels;
