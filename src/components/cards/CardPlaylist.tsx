import Image from "next/image"

interface CardPlayListProps {
  url: string
  playlistName: string
  author: string
}

export const CardPlaylist: React.FC<CardPlayListProps> = ({
  url,
  playlistName,
  author,
}: CardPlayListProps) => (
  <a
    className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
    href=""
  >
    <Image
      className="w-full"
      width={104}
      height={104}
      alt="Capa Pure Heroine"
      src={url}
    />
    <strong className="font-semibold">{playlistName}</strong>
    <span className="text-sm text-zinc-400">{author}</span>
  </a>
)
