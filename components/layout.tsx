import {
    faBlogger,
    faBluesky,
    faGithub,
    faLinkedin,
    faMastodon,
    faSpotify,
    faStrava,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
    title,
    description,
    url,
    image,
    children,
}: {
    title: string;
    description: string;
    url: string;
    image?: string | null;
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row min-h-screen h-full">
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta
                    property="og:image"
                    content={image ? `${process.env.HOST}${image}` : `${process.env.HOST}/images/profile.jpg`}
                />
                <meta property="og:locale" content="en_GB" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={description} />
                <link rel="icon" href="/icons/favicon.ico" />
                <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            </Head>
            <div className="sm:w-4/12 md:w-3/12 bg-gray-800 p-8">
                <header className="grid justify-items-center space-y-3">
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className="rounded-full"
                        height={128}
                        width={128}
                        alt="Picture of Ben Paddock"
                    />
                    <h1 className="uppercase text-white">
                        <Link href={`/`}>Ben Paddock</Link>
                    </h1>
                    <p className="text-gray-300 text-center">Developer, avid cyclist and coffee drinker.</p>
                </header>
                <nav className="mt-4 text-gray-300">
                    <ul className="flex flex-wrap flex-row sm:flex-col text-center sm:text-left">
                        <li className="p-2 flex-auto">
                            <Link href={`/about`}>
                                <FontAwesomeIcon className="mr-2" icon={faUser} fixedWidth size="sm" />
                                About
                            </Link>
                        </li>
                        <li className="p-2 flex-auto">
                            <Link href={`/blog`}>
                                <FontAwesomeIcon className="mr-2" icon={faBlogger} fixedWidth size="sm" />
                                Blog
                            </Link>
                        </li>
                        <li className="p-2 flex-auto">
                            <a href="https://www.linkedin.com/in/benpaddock/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faLinkedin} fixedWidth size="sm" />
                                LinkedIn
                            </a>
                        </li>
                        <li className="p-2 flex-auto">
                            <a href="https://github.com/pads" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faGithub} fixedWidth size="sm" />
                                GitHub
                            </a>
                        </li>
                        <li className="p-2 flex-auto">
                            <a href="https://hachyderm.io/@pads" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faMastodon} fixedWidth size="sm" />
                                Mastodon
                            </a>
                        </li>
                        <li className="p-2 flex-auto">
                            <a href="https://bsky.app/profile/essexpads.bsky.social" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faBluesky} fixedWidth size="sm" />
                                Bluesky
                            </a>
                        </li>
                        <li className="p-2 flex-auto">
                            <a href="https://open.spotify.com/user/essexpads" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faSpotify} fixedWidth size="sm" />
                                Spotify
                            </a>
                        </li>
                        <li className="p-2 flex-auto">
                            <a href="https://www.strava.com/athletes/176806" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faStrava} fixedWidth size="sm" />
                                Strava
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <main className="sm:w-8/12 md:w-9/12 p-8">{children}</main>
        </div>
    );
}
