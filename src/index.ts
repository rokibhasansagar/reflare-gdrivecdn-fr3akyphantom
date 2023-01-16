import useReflare from 'reflare';

const handleRequest = async (
  request: Request,
): Promise<Response> => {
  const reflare = await useReflare();

  reflare.push({
    path: '/*',
    loadBalancing: {
      policy: 'random',
    },
    upstream: [
      {
        domain: 'https://gdindex.phantomdroida.workers.dev',
        protocol: 'https',
      },
      {
        domain: 'https://gdindex.phantomdroidb.workers.dev',
        protocol: 'https',
      },
      {
        domain: 'https://gdindex.phantomdroidc.workers.dev',
        protocol: 'https',
      },
      {
        domain: 'https://gdindex.phantomdroidx.workers.dev',
        protocol: 'https',
      },
      {
        domain: 'https://gdindex.phantomdroidy.workers.dev',
        protocol: 'https',
      },
      {
        domain: 'https://gdindex.phantomdroidz.workers.dev',
        protocol: 'https',
      },
    ],
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  return reflare.handle(request);
};

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
