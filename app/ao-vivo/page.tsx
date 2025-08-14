import event from "@/content/event.json"; import Section from "@/components/Section"; import Timeline from "@/components/Timeline";
export const metadata={ title:"Ao vivo" };
export default function Page(){
  return(<div>
    <Section title="Status do evento" subtitle="Acompanhe o cronograma e aproveite a playlist">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <div className="card p-4 sm:p-6">
          <h3 className="font-semibold mb-3">Playlist</h3>
          <iframe style={{borderRadius:12}} className="w-full h-[320px] sm:h-[380px]" src={event.playlist} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
        </div>
        <div className="card p-4 sm:p-6">
          <h3 className="font-semibold mb-3">Contatos rápidos</h3>
          <ul className="space-y-2 text-zinc-300">{event.contacts.map((c,i)=>(
            <li key={i} className="flex items-center justify-between gap-2"><span>{c.name}</span>
              <div className="flex flex-wrap gap-2">
                <a className="btn btn-outline" href={`tel:${c.phone}`}>Ligar</a>
                <a className="btn btn-outline" href={c.whatsapp} target="_blank">WhatsApp</a>
              </div>
            </li>))}
          </ul>
        </div>
      </div>
    </Section>
    <Timeline title="Linha do tempo"/>
  </div>);
}
