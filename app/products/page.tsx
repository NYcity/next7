
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from 'next/link'

type Song = {
    name: string;
};

type Playlist = {
    playlistName: string;
    songs: Song[];
};

//{"playlistName":"soothing","songs":[{"name":"naa koi umang hai"},{"name":"kahi door jab din dhal jaaye"},{"name":"channa meraya"}]}
async function getSongs(): Promise<Song[]> {
    try {
        const url = "https://be-ask.tanaypratap.repl.co/playlist";
        const response = await axios.get<Playlist>(url);
        return response.data.songs;
    } catch (err) {
        console.log(err);
        return [];
    }
}
export default function Products() {
    const [songs, setSongs] = useState<[] | Song[]>([]);

    useEffect(() => {
        (async () => {
            const songs = await getSongs();
            setSongs(songs);
        })();
    }, []);
    return (
        <>
            <h1>Product Detail</h1>
            <Link href="/products/1">물건1번</Link>
            <div className="App">
                <h1>Songs</h1>
                <ul>
                    {songs.map((song: Song) => (
                        <li>{song.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}