import Head from "next/head";
import Image from "next/image";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layout({ title, children }: { title: string; children: React.ReactNode }): JSX.Element {
    return (
        <div className="flex h-screen">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://kit.fontawesome.com/e53d75a58e.js" crossOrigin="anonymous"></script>
            </Head>
            <div className="flex-none w-3/12 bg-black p-8">
                <header className="grid justify-items-center space-y-3">
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className="rounded-full"
                        height={128}
                        width={128}
                        alt="Ben Paddock"
                    />
                    <h1 className="uppercase text-white">Ben Paddock</h1>
                    <p className="text-gray-300">Full stack developer</p>
                </header>
                <nav className="mt-4 text-gray-300">
                    <ul>
                        <li className="p-2">
                            <a href="https://www.linkedin.com/in/benpaddock/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faLinkedin} fixedWidth size="sm" />
                                LinkedIn
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="http://github.com/pads" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faGithub} fixedWidth size="sm" />
                                GitHub
                            </a>
                        </li>
                        <li className="p-2">
                            <a href="http://twitter.com/_pads" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="mr-2" icon={faTwitter} fixedWidth size="sm" />
                                Twitter
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <main className="flex-grow p-8">{children}</main>
        </div>
    );
}
