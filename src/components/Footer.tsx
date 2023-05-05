import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react"

import { CardPlayNow } from "./cards/CardPlayNow"

interface CardProps {
  url: string
  title: string
  description: string
}

export const Footer: React.FC<any> = () => (
  <footer className="bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex items-center justify-between fixed w-full bottom-0">
    <CardPlayNow
      url="https://m.media-amazon.com/images/I/31dbWjZpKnL._AC_SX425_.jpg"
      song="White tooths"
      author="Lord"
    />
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-6">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack size={20} className="text-zinc-200" />

        <button className="w-12 h-12 rounded-full bg-white ml-auto text-black items-center flex justify-center pl-1">
          <Play />
        </button>

        <SkipForward size={20} className="text-zinc-200" />
        <Repeat size={20} className="text-zinc-200" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">2:10</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="h-1 rounded-full w-1/2 bg-zinc-300"></div>
        </div>
        <span className="text-xs text-zinc-400">3:51</span>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className="flex items-center gap-4">
        <Volume size={20} />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="h-1 rounded-full w-1/2 bg-zinc-300"></div>
        </div>
      </div>
      <Maximize2 size={20} />
    </div>
  </footer>
)
