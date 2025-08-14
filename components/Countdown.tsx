'use client';
import { useEffect,useState } from 'react';
export default function Countdown({dateISO}:{dateISO:string}){
  const [r,setR]=useState({d:0,h:0,m:0,s:0});
  useEffect(()=>{const t=setInterval(()=>{const T=new Date(dateISO).getTime(),n=Date.now();let d=Math.max(0,Math.floor((T-n)/1000));const D=Math.floor(d/86400);d-=D*86400;const H=Math.floor(d/3600);d-=H*3600;const M=Math.floor(d/60);d-=M*60;setR({d:D,h:H,m:M,s:d});},1000);return()=>clearInterval(t);},[dateISO]);
  return(<div className="flex flex-wrap gap-3">{(['d','h','m','s'] as const).map(k=>(
    <div key={k} className="card px-4 py-3 text-center min-w-[84px]">
      <div className="text-xl sm:text-2xl font-semibold">{(r as any)[k]}</div>
      <div className="text-[10px] sm:text-xs uppercase text-zinc-400">{k}</div>
    </div>
  ))}</div>);
}
