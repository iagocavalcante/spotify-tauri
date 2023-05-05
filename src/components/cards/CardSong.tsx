import { Play } from "lucide-react"
import Image from "next/image"

interface CardSongProps {
  url: string
  song: string
}

export const CardSong: React.FC<CardSongProps> = ({ url, song }: CardSongProps) => (
  <a className="bg-white/8 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
    <Image className="" width={104} height={104} alt="Capa Pure Heroine" src={url} />
    <strong>{song}</strong>
    <button className="w-12 h-12 rounded-full bg-green-400 ml-auto text-black mr-8 items-center flex justify-center pl-1 invisible group-hover:visible group-hover:cursor-pointer">
      <Play />
    </button>
  </a>
)
