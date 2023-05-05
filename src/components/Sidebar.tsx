import { Home as HomeIcon, Library, Search } from "lucide-react"
export const Sidebar: React.FC<any> = () => (
  <aside className="w-72 bg-zinc-950 p-6">
    <nav className="space-y-5">
      <a
        href="#"
        className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
      >
        <HomeIcon />
        Home
      </a>
      <a
        href="#"
        className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
      >
        <Search />
        Search
      </a>
      <a
        href="#"
        className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
      >
        <Library />
        Your Library
      </a>
    </nav>

    <nav className="pt-10 border-t border-zinc-800 flex flex-col gap-3 mt-4">
      <a className="text-zinc-400 text-sm hover:text-zinc-100" href="">
        Playlist 1
      </a>
      <a className="text-zinc-400 text-sm hover:text-zinc-100" href="">
        Playlist 1
      </a>
      <a className="text-zinc-400 text-sm hover:text-zinc-100" href="">
        Playlist 1
      </a>
      <a className="text-zinc-400 text-sm hover:text-zinc-100" href="">
        Playlist 1
      </a>
    </nav>
  </aside>
)
