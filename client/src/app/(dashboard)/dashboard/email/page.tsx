'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmailComposer } from '@/components/email/email-composer';
import { EmailCampaigns } from '@/components/email/email-campaigns';
import { EmailTemplates } from '@/components/email/email-templates';
import { EmailAnalytics } from '@/components/email/email-analytics';

export default function EmailPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Email Campaigns</h2>
                <Button>View Analytics</Button>
            </div>

            <Tabs defaultValue="compose" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="compose">New Campaign</TabsTrigger>
                    <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="compose" className="space-y-4">
                    <EmailComposer />
                </TabsContent>
                <TabsContent value="campaigns" className="space-y-4">
                    <EmailCampaigns />
                </TabsContent>
                <TabsContent value="templates" className="space-y-4">
                    <EmailTemplates />
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                    <EmailAnalytics />
                </TabsContent>
            </Tabs>
        </div>
    );
}