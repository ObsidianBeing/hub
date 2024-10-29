'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SMSComposer } from '@/components/sms/sms-composer';
import { BulkSMSUpload } from '@/components/sms/bulk-sms-upload';
import { SMSHistory } from '@/components/sms/sms-history';

export default function SMSPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">SMS Management</h2>
                <Button>View Analytics</Button>
            </div>

            <Tabs defaultValue="compose" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="compose">Compose</TabsTrigger>
                    <TabsTrigger value="bulk">Bulk SMS</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="compose" className="space-y-4">
                    <SMSComposer />
                </TabsContent>
                <TabsContent value="bulk" className="space-y-4">
                    <BulkSMSUpload />
                </TabsContent>
                <TabsContent value="history" className="space-y-4">
                    <SMSHistory />
                </TabsContent>
            </Tabs>
        </div>
    );
}