import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(), 
		VitePWA({
			manifest: {
				name: "Expense Tracker",
				short_name: "ET",
				theme_color: "#5446ff",
				start_url: "/",
				display: "standalone",
				background_color: "#18181b",
				icons: [
					{
						src: '/pie-chart-512.png',
						sizes: '512x512',
						type: 'imagen/png',
						purpose: 'any maskabale'
					},
					{
						src: '/pie-chart-128.png',
						sizes: '128x128',
						type: 'imagen/png',
						purpose: 'any maskabale'
					}
				]
			}
		})],
})
