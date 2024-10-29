'use client';

import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b flex items-center justify-between px-6">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <UserButton afterSignOutUrl="/" />
                </header>
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}