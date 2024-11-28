import { NextResponse, NextRequest } from "next/server";
import { getLiveTrackUrl } from "./lib/liveTrack";

export async function middleware(request: NextRequest) {
    const url = await getLiveTrackUrl();
    return NextResponse.redirect(new URL(url, request.url));
}

export const config = {
    matcher: "/live-track",
};
