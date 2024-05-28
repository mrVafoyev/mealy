import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Routing from "@/components/layout/routing";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import RegisterPage from "./register/page";
import store, { persistedStore } from "@/reducers/store";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// "use client"
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="content_page_wrapper" id="content_page_wrapper">
					<div className="main_children_wrapper">{children}</div>
					
				</div>
			</body>
		</html>
	);
}
