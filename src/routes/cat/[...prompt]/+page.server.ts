export const load = async ({ params }) => {
    const { prompt } = params;

    const url = new URL("https://kittyai.heliumws.workers.dev/cat/");
    url.searchParams.append("prompt", prompt);
    
    const req = await fetch(url);
    const json = await req.json();

    return { ...json };
}