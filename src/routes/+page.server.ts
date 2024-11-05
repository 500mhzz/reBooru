export const load = async ({ fetch }) => {
    const response = await fetch('https://e621.net/posts.json?limit=40', {
        headers: {
            'User-Agent': 'YourAppName/1.0 (your.email@example.com)'
        }
    });

    return {
        response: await response.json()
    }
}