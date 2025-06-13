import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(),],
	server: {
    	host: true,
    	port: 5173,
		allowedHosts: [
      		'4178-2401-4900-93e6-7ddb-e533-5344-33b7-b0db.ngrok-free.app'
    ],
	build: {
  		minify: 'terser',
  		terserOptions: {
  			compress: {
  	    		drop_console: true,
	    		drop_debugger: true,
    		}
  		}
	}
  	},
	test: {
		workspace: [
			{
				extends: './vite.config.js',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.js']
				}
			},
			{
				extends: './vite.config.js',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});