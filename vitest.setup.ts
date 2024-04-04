/// <reference types="vitest" />

import '@testing-library/jest-dom/vitest';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['test/vitest.setup.ts'],
		include: ['**/?(*.)test.ts?(x)']
	}
});
