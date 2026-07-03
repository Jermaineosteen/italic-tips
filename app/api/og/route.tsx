import { ImageResponse } from "next/og";
import { getSettings } from "@/lib/getSettings";

export async function GET() {
    try {
        const settings = await getSettings();
        const title = settings?.site_title || "Italic Tips";
        const description = settings?.hero_subtitle || "Daily football predictions";

        return new ImageResponse(
            (
                <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a', padding: '40px'}}>
                    <div 
                        style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            border: '4px solid #1e293b', 
                            borderRadius: '24px', 
                            padding: '60px', 
                            background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {/* visual target acdent */}
                        <div style={{color: '#38bdf8', fontSize: 32, fontWeight: 'bold', marginBottom: 20}}>
                        ⚽ {title.toUpperCase()}
                        </div>

                        {/* main heading */}
                        <div
                            style={{
                                fontSize: 64,
                                fontWeight: '900',
                                color: 'white',
                                textAlign: 'center',
                                marginBottom: 20,
                            }}
                        >
                            {title}
                        </div>

                        {/* subtitle desciption */}
                        <div
                            style={{
                                fontSize: 32,
                                color: '#94a3b8',
                                textAlign: 'center',
                            }}
                        >
                            {description}
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        return new Response(`Failed to generate the image`, { status: 500 });
    }

}