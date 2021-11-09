import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';

const rollupConfig = defineConfig({
	input: 'src/index.ts',
	plugins: [
		esbuild({
			minify: true,
		}),
		commonjs({
			extensions: ['.ts'],
		}),
	],
	external: ['fs'],
	output: [
		{
			format: 'cjs',
			file: 'dist/index.js',
			interop: false,
			exports: 'default',
		},
		{
			format: 'es',
			file: 'dist/index.mjs',
		},
	],
});

export default rollupConfig;
