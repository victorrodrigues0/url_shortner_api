import { RequestHandler } from "express";
import { urlSchema } from "../schemas/urlSchema";
import { nanoid } from "nanoid";

const urls = new Map<string, string>();

export const indexMessage: RequestHandler = (req, res) => {
    res.status(200).json({ "message": "API running" });
}

export const urlShortner: RequestHandler = (req, res) => {
    const { url } = req.body;
    const urlValidation = urlSchema.safeParse(url);


    if (!urlValidation.success) {
        res.status(500).json({ "message": "Invalid URL" });
        return;
    }

    const urlData = urlValidation.data;
    const hashUrl = nanoid(6);

    urls.set(hashUrl, urlData);

    res.status(200).json({
        "message": "URL Shortened",
        "originalUrl": urlData,
        "hashUrl": hashUrl,
        "shortenedUrl": process.env.BASE_URL + hashUrl
    });
}

export const urlRedirect: RequestHandler = (req, res) => {
    const { slug } = req.params;

    if (!urls.has(slug)) {
        res.status(404).json({ "message": "URL not found" });
        return;
    }

    const originalUrl = urls.get(slug) || "";

    res.status(200).redirect(originalUrl);
}

export const listSlugs: RequestHandler = (req, res) => {

    if (urls.size === 0) {
        res.status(404).json({ "message": "No URLs" });
        return;
    }

    const slugs = Array.from(urls.keys()).map((slug) => {
        return {
            slug: slug,
            originalUrl: urls.get(slug)
        }
    });

    res.status(200).json(slugs);
}

export const clearUrls: RequestHandler = (req, res) => {

    if (urls.size === 0) {
        res.status(404).json({ "message": "No URLs to clear" });
        return;
    }

    urls.clear();
    res.status(200).json({ "message": "URLs cleared" });
}