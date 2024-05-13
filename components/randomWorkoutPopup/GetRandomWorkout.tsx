import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getRandomWorkout } from "@/queries/get-random-workout";
import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import type { workouts } from "@/queries/common";
import Summary from "./Summary";
import { useState } from "react";
import { Button } from "../Button";

export function GetRandomWorkout() {
  const numberOfRecords = 5; // uggly but fine for now
  const supabase = useSupabaseBrowser();
  const [randomId, setRandomId] = useState(
    Math.floor(Math.random() * numberOfRecords) + 1
  );
  const [simple, setSimple] = useState(localStorage.getItem("mode") || false);

  const GenerateRandomId = () => {
    setRandomId(Math.floor(Math.random() * numberOfRecords) + 1);
  };

  const ToggleSimple = () => {
    setSimple(!simple);
  };

  const {
    data: workouts,
    isLoading,
    isError,
  } = useQuery(getRandomWorkout(supabase, randomId));

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="px-16 text-xl shadow border border-1 border-black rounded p-2 hover:shadow-md bg-amber-400"
          onClick={GenerateRandomId}
        >
          Generate a Workout
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between">
        <div>
          <DialogHeader>
            <DialogTitle className="text-3xl px-5 mt-5 lg:mt-0 font-medium">
              {workouts?.title}
            </DialogTitle>
            <div className="px-5">
              {workouts?.additional}
              <Button type="icon" className="ml-2" onClick={ToggleSimple}>
                🧘
              </Button>
            </div>
          </DialogHeader>
          {simple ? (
            <h2></h2>
          ) : (
            <div className="flex flex-wrap gap-10 p-5 mt-10 xl:mt-20">
              <Summary
                title="Session"
                icon="🏃🏼‍♂️"
                content={workouts?.session || ""}
              />

              <Summary
                title="Recovery"
                icon="💤"
                content={workouts?.recovery || ""}
              />

              <Summary
                title="Intensity"
                icon="💨"
                content={workouts?.intensity || ""}
              />

              <Summary title="Aim" icon="🎯" content={workouts?.aim || ""} />

              <Summary
                title="Make it harder"
                icon="⬆️"
                content={workouts?.harder || ""}
              />

              <Summary
                title="Make it easier"
                icon="⬇️"
                content={workouts?.easier || ""}
              />
            </div>
          )}
        </div>
        <DialogFooter className="w-full flex justify-end gap-2">
          <Button type="clear" className="w-10 py-1" onClick={GenerateRandomId}>
            ↻
          </Button>
          <Button type="primary" className="w-[15%] py-1">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
