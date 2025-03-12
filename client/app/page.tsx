"use client";
import { useTasks } from "@/context/taskContext";
import useRedirect from "@/hooks/useUserRedirect";
import Filters from "./Components/Filters/Filters";
import { useEffect } from "react";
import TaskItems from "./TaskItems/TaskItems";

export default function Home() {
  useRedirect("/login");

  const { tasks } = useTasks();

  return (
    <main className="m-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Filters />
      </div>

    <div className="pd-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]">
    {
      tasks.map((task) => (
        <TaskItems></TaskItems>
      ))
    }
    </div>
    </main>
  );
}