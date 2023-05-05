import Image from "next/image"

interface CardPlayNowProps {
  url: string
  song: string
  author: string
}

export const CardPlayNow: React.FC<CardPlayNowProps> = ({
  url,
  song,
  author,
}: CardPlayNowProps) => (
  <div className="flex items-center gap-2">
    <Image width={80} height={80} alt="Capa Pure Heroine" src={url} />
    <div className="flex flex-col">
      <strong className="font-normal">{song}</strong>
      <span className="text-xs text-zinc-400">{author}</span>
    </div>
  </div>
)
