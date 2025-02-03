import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'XiphiasComponents',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            output: {
                globals: {
                    lit: 'LitElement',
                },
                assetFileNames: 'style.css',
            },
        },

        cssCodeSplit: false,
    },
});
