"use client"

import Navigation from "./components/Navbar"
import Landing from "./components/Landing"
import Video from "./components/Video"
import Merch from "./components/Merch"
import Shows from "./components/Shows"

export default function Home() {
    return (
        <main>
            <Navigation />
            <Landing />
            <Video />
            <Merch />
            <Shows />
        </main>
    );
}
