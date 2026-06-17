import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Aliester — Tu vida organizada en un solo lugar",
	description:
		"Calma por claridad, no por ausencia de pendientes. Finanzas, proyectos, calendario, notas y suscripciones en un panel unificado con asistente inteligente.",
	keywords: [
		"productividad",
		"gestión personal",
		"finanzas",
		"organización",
		"asistente IA",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${geistSans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
