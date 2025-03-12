"use client";
import React from "react";
import { UserContextProvider } from "../context/userContext";
import { TasksProvider } from "../context/taskContext";

interface Props {
  children: React.ReactNode;
}

function UserProvider({ children }: Props) {
  return <UserContextProvider>{children}</UserContextProvider>;
}

export default UserProvider;
