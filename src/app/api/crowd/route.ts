import { NextResponse } from "next/server";
import { getCrowdData } from "@/data/crowd-data";
import { getCrowdStatus } from "@/lib/crowd";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const spotId = searchParams.get("spotId");

  if (spotId) {
    const crowdData = getCrowdData(spotId);
    if (!crowdData) {
      return NextResponse.json(
        { error: "Spot not found" },
        { status: 404 }
      );
    }
    const status = getCrowdStatus(spotId, crowdData);
    return NextResponse.json(status);
  }

  return NextResponse.json(
    { error: "spotId parameter is required" },
    { status: 400 }
  );
}
