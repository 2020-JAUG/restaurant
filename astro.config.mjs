// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://github.com/2020-JAUG.io',
    base: '/restaurant/',
    output: 'static',
    outDir: 'dist'
});