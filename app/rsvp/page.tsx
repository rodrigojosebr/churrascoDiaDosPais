import event from "@/content/event.json"; export const metadata = { title: "RSVP" };
export default function Page() {
  return (<section className="container my-6 sm:my-10"><div className="card p-4 sm:p-6">
    <h2 className="subtitle mb-3">Confirmar presença</h2>
    <p className="text-zinc-400 mb-4">Confirme sua presença no WhatsApp: {event.contacts[0].whatsapp}.</p>
    <div className="w-full overflow-hidden rounded-xl border border-zinc-800 aspect-[16/10] sm:aspect-[16/9]">
      {/* <iframe className="w-full h-full" src={event.embeds.rsvpForm} /> */}
    </div></div></section>);
}
