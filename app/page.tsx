import Link from "next/link";
import event from "@/content/event.json";
import Countdown from "@/components/Countdown";
import MenuGrid from "@/components/MenuGrid";
import Timeline from "@/components/Timeline";
import { formatDateFriendly } from "@/lib/utils";

export default function Page() {
  return (<div>
    <section className="container my-6 sm:my-10 grid gap-4 sm:gap-6 lg:grid-cols-2">
      <div className="card p-4 sm:p-6">
        <h1 className="title mb-2">{event.title}</h1>
        <p className="text-zinc-300 mb-4">{event.subtitle}</p>
        <p className="mb-4"><span className="badge">{formatDateFriendly(event.date)}</span></p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* <Link href="/rsvp" className="btn btn-primary">Confirmar presença</Link> */}
          <a href="/api/ics" className="btn btn-outline">Adicionar ao calendário</a>
          <Link href="/quando-onde" className="btn btn-outline">Como chegar</Link>
        </div>
        <div className="mt-4 sm:mt-6"><Countdown dateISO={event.date} /></div>
      </div>

      <div className="card p-4 sm:p-6">
        <h3 className="font-semibold mb-2">Local</h3>
        <p className="text-zinc-300">{event.venue.name}</p>
        <p className="text-zinc-400">{event.venue.address}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="btn btn-outline" href={event.maps.google} target="_blank">Google Maps</a>
          <a className="btn btn-outline" href={event.maps.waze} target="_blank">Waze</a>
        </div>
        <p className="mt-6 text-sm text-zinc-400">Contato: {event.contacts[0].name} — {event.contacts[0].phone}</p>
      </div>
    </section>

    <MenuGrid />
    <Timeline />
  </div>);
}
