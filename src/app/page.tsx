"use client"

import Navigation from "./components/Navbar"
import Landing from "./components/Landing"
import Video from "./components/Video"

export default function Home() {
    return (
        <main>
            <Navigation />
            <Landing />
            <Video />
        </main>
    );
}
