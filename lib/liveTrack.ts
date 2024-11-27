export async function getLiveTrackUrl(): Promise<string> {
    const response = await fetch("https://d2bk5wag765gxi.cloudfront.net/url");
    return await response.text();
}
