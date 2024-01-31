"use client"

import Navigation from "./components/Navbar"
import Landing from "./components/Landing"
import Video from "./components/Video"
import Merch from "./components/Merch"
import Shows from "./components/Shows"
import Contact from "./components/Contact"

export default function Home() {
    return (
        <main className="mb-4 pb-4">
            <Navigation />
            <Landing />
            <Video />
            <Merch />
            <Shows />
            <Contact />
        </main>
    );
}
