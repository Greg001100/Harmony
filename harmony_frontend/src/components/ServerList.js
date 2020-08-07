import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServers } from "../actions/ServerActions";
import { NavLink } from "react-router-dom";

const ServerList = () => {

  const userId = useSelector((state) => state.authentication.user.id);
  const servers = useSelector((state) => state.servers[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServers());
  }, []);

  if (servers) {
    return (
      <>
        {servers.server.map((server) => {
          return (
            <p key={server.id}>
              <NavLink to={`home/${server.id}`}>
                {server.name}
              </NavLink>
            </p>
          );
        })}
      </>
    );
  } else {
    return <h1>Server List</h1>;
  }
};

export default ServerList;
