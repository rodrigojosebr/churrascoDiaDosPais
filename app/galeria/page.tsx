import Section from "@/components/Section"; import index from "@/content/gallery/index.json";
export const metadata={ title:"Galeria" };
export default function Page(){
  return(<Section title="Galeria" subtitle="Álbuns do churrasco">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">{(index as any[]).map(album=>(
      <a key={album.slug} href={`/galeria/${album.slug}`} className="card overflow-hidden">
        <img src={album.cover} alt={album.title} className="w-full aspect-[4/3] object-cover"/>
        <div className="p-3 sm:p-4">
          <div className="font-semibold">{album.title}</div><div className="text-sm text-zinc-400">{album.count} itens</div>
        </div>
      </a>))}
    </div>
  </Section>);
}
