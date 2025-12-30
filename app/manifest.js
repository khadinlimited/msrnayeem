export default function manifest() {
    return {
        name: 'Md Shahidur Rahman Nayeem Portfolio',
        short_name: 'msrnayeem',
        description: 'Portfolio of Md Shahidur Rahman Nayeem - Full Stack Developer',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
