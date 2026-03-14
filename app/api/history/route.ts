import { NextResponse } from "next/server";
import { studyDates } from "../study/route";

export async function GET() {
  const sorted = [...studyDates].sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return NextResponse.json(sorted);
}