'use client';

import { useContext } from 'react';
import NotificationContext from '@/src/store/notification-context';
import Notification from '@/src/components/notification/notification';

export default function Client() {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification: {
    title: string;
    message: string;
    status: string;
  } | null = notificationCtx.notification || {
    title: '',
    message: '',
    status: '',
  };
  // Check if all properties are empty
  const isNotificationEmpty =
    activeNotification?.title === '' &&
    activeNotification?.message === '' &&
    activeNotification?.status === '';
  return (
    <>
      {!isNotificationEmpty && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
