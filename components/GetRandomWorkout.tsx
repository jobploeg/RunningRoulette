import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/Button";

export function GetRandomWorkout() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="px-16 text-xl shadow border border-1 border-black rounded p-2 hover:shadow-md bg-amber-400 ">
          Generate a Workout
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-4xl">Random workout tite</DialogTitle>
          <DialogDescription>
            This is some lorem content. his is some lorem content. his is some
            lorem content. his is some lorem content. his is some lorem content.
            his is some lorem content. 🏃🏼‍♂️
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
