import { ChevronLeft, ChevronRight } from "lucide-react"

import { CardPlaylist } from "@/components/cards/CardPlaylist"
import { CardSong } from "@/components/cards/CardSong"
import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"

const mixins = [
  {
    url: "https://m.media-amazon.com/images/I/31dbWjZpKnL._AC_SX425_.jpg",
    playlistName: "Pure Heroine",
    author: "Lorde",
    song: "White tooths",
  },
  {
    url: "https://m.media-amazon.com/images/I/31dbWjZpKnL._AC_SX425_.jpg",
    playlistName: "Pure Heroine",
    author: "Lorde",
    song: "White tooths",
  },
  {
    url: "https://m.media-amazon.com/images/I/31dbWjZpKnL._AC_SX425_.jpg",
    playlistName: "Pure Heroine",
    author: "Lorde",
    song: "White tooths",
  },
  {
    url: "https://m.media-amazon.com/images/I/31dbWjZpKnL._AC_SX425_.jpg",
    playlistName: "Pure Heroine",
    author: "Lorde",
    song: "White tooths",
  },
]

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4 overflow-y-auto">
            {mixins.map((mixin) => (
              <CardSong key={new Date().getTime()} {...mixin} />
            ))}
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Iaguin do Play</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            {mixins.map((mixin) => (
              <CardPlaylist key={new Date().getTime()} {...mixin} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
