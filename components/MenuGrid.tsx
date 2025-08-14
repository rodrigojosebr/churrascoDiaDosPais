import Section from './Section'; import menu from '@/content/menu.json';
type Item={class:string;item:string;detail?:string;qty?:string};
export default function MenuGrid(){
  const groups=(menu as Item[]).reduce((acc:Record<string,Item[]>,it)=>{(acc[it.class]=acc[it.class]||[]).push(it);return acc;},{});
  return(<Section title="Cardápio" subtitle="Carnes, acompanhamentos e bebidas">
    <div className="grid-cards">{Object.entries(groups).map(([g,items])=>(
      <div key={g} className="card p-4">
        <h3 className="font-semibold mb-3">{g}</h3>
        <ul className="space-y-2">{items.map((it,idx)=>(
          <li key={idx} className="flex items-start justify-between gap-4">
            <div className="break-anywhere"><div>{it.item}</div>{it.detail&&<small className="muted">{it.detail}</small>}</div>
            {it.qty&&<span className="badge whitespace-nowrap">{it.qty}</span>}
          </li>))}
        </ul>
      </div>))}
    </div>
  </Section>);
}
