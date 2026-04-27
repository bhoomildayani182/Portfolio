import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const routes = [
        { path: "", priority: 1.0 },
        { path: "/about", priority: 0.9 },
        { path: "/experience", priority: 0.9 },
        { path: "/education", priority: 0.75 },
        { path: "/skills", priority: 0.85 },
        { path: "/projects", priority: 0.95 },
        { path: "/certifications", priority: 0.8 },
        { path: "/achievements", priority: 0.7 },
        { path: "/contact", priority: 0.9 },
        { path: "/portfolio", priority: 0.75 },
    ];

    return routes.map((route) => ({
        url: `${SITE_URL}${route.path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route.priority,
    }));
}
