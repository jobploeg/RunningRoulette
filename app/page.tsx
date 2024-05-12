import { Button } from "@/components/Button";
import { CategoriesMovingCards } from "@/components/CategoriesMovingCards";
import Cta from "@/components/Cta";
import { GetRandomWorkout } from "@/components/GetRandomWorkout";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-around justify-between bg-amber-50">
      <Cta />
      <div className="mb-5">
        <CategoriesMovingCards />
      </div>
    </main>
  );
}
