import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://italictips.com";

    return [
        {
            url: siteUrl,
            priority: 1,
            changeFrequency: "daily",
        },
        {
            url: `${siteUrl}/history`,
            priority: 0.8,
            changeFrequency: "daily",
        },
        {
            url: `${siteUrl}/contact`,
            priority: 0.5,
            changeFrequency: "monthly",
        },
        {
            url: `${siteUrl}/privacy-policy`,
            priority: 0.4,
            changeFrequency: "yearly",
        },
        {
            url: `${siteUrl}/disclaimer`,
            priority: 0.3,
            changeFrequency: "yearly",
        }
    ]
}