"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function CategoriesMovingCards() {
  return (
    <div className="h-fit flex flex-col antialiased bg-inherit items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={categories} direction="right" speed="slow" />
    </div>
  );
}

const categories = [
  {
    name: "Base training",
  },
  {
    name: "800m",
  },
  {
    name: "1500m",
  },
  {
    name: "5 kilometer",
  },
  {
    name: "10 kilometer",
  },
  {
    name: "Halve marathon",
  },
  {
    name: "Marathon",
  },
];
