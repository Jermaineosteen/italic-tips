import Image from "next/image";
import Link from "next/link";
import { getAdvertisement } from "@/lib/ads";


interface Props {
    position: string;
}

export default async function Advertisement({ position }: Props) {
    const ad = await getAdvertisement(position);

    if (!ad) return null;

    return (
        <section className="my-8">
            <Link
                href={ad.target_url}
                target="_blank"
                className="block"
            >
                <div className="relative h-32 md:h-44 lg:h-48 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                        Sponsored
                    </span>

                    <Image
                        src={ad.image_url}
                        alt={ad.title}
                        fill
                        sizes="100vw"
                        className="object-cover transition duration-300 hover:scale-105"
                    />
                </div>
            </Link>
        </section>
    )
}