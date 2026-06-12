import type { Metadata } from "next";
import SixTranceBalladsClient from "./SixTranceBalladsClient";

export const metadata: Metadata = {
  title: "I Arrived As Someone Else — Six Trance Ballads | DJ Andy'K",
  description:
    "Six emotional trance ballads written as personal letters. A cinematic trance project by DJ Andy'K. First listen on SoundCloud.",
  alternates: { canonical: "https://www.djandykofficial.com/six-trance-ballads" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/six-trance-ballads",
    title: "I Arrived As Someone Else — Six Trance Ballads",
    description:
      "Six emotional trance ballads written as personal letters. A cinematic trance project by DJ Andy'K.",
    images: [
      {
        url: "/releases/six-trance-ballads-the-album.png",
        width: 1200,
        height: 1200,
        alt: "I Arrived As Someone Else — Six Trance Ballads by DJ Andy'K",
      },
    ],
  },
};

export default function SixTranceBalladsPage() {
  return <SixTranceBalladsClient />;
}
