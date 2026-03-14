import { NextResponse } from "next/server";
import { studyDates } from "../study/route";
import { calculateStreak } from "@/lib/streakLogic";

export async function GET() {
  const result = calculateStreak(studyDates);

  return NextResponse.json(result);
}