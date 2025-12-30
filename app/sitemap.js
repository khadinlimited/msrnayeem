export default function sitemap() {
    const baseUrl = 'https://msrnayeem.cloud';
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
