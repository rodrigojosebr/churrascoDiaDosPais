import event from "@/content/event.json"; import Section from "@/components/Section"; import { formatDateFriendly } from "@/lib/utils";
export const metadata={ title:"Quando & Onde" };
export default function Page(){
  return(<Section title="Quando & Onde" subtitle="Endereço, mapa e dicas">
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
      <div className="card p-4 sm:p-6">
        <h3 className="font-semibold mb-2">Data e horário</h3>
        <p className="text-zinc-300">{formatDateFriendly(event.date)}</p>
        <h3 className="font-semibold mt-6 mb-2">Local</h3>
        <p className="text-zinc-300">{event.venue.name}</p>
        <p className="text-zinc-400">{event.venue.address}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="btn btn-outline" href={event.maps.google} target="_blank">Google Maps</a>
          <a className="btn btn-outline" href={event.maps.waze} target="_blank">Waze</a>
        </div>
      </div>
      <div className="card overflow-hidden">
        <iframe title="mapa" src={event.embeds.mapFrame} className="w-full h-[300px] sm:h-[420px] border-0" loading="lazy"/>
      </div>
    </div>
  </Section>);
}
