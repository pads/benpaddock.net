export async function getLiveTrackUrl(): Promise<string> {
    const response = await fetch(process.env.LIVE_TRACK_URL);
    return await response.text();
}
