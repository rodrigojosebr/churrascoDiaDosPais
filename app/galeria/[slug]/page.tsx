import GalleryGrid from "@/components/GalleryGrid";
import Section from "@/components/Section";
import index from "@/content/gallery/index.json";
import { notFound } from "next/navigation";

export function generateStaticParams() { return (index as any[]).map(a => ({ slug: a.slug })); }

export default async function Page({ params }: { params: { slug: string } }) {
  const album = (index as any[]).find(a => a.slug === params.slug); if (!album) return notFound();
  const items = (await import(`@/content/gallery/${album.slug}.json`)).default;
  return (<Section title={album.title}><GalleryGrid items={items as any[]} /></Section>);
}
