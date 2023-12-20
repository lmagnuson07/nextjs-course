'use client';

import { NotificationContextProvider } from '@/src/store/notification-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return <NotificationContextProvider>{children}</NotificationContextProvider>;
}
