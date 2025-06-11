import vercel from '@sveltejs/adapter-vercel';

const config = {
    kit: {
        adapter: vercel(),
        alias: {
            '$lib': 'src/lib'
        }
    }
};

export default config;