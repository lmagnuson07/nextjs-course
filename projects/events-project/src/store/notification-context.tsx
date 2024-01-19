'use client';

import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData: any) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider(props: any) {
  const { children } = props;
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    if (
      notification &&
      (notification.status === 'success' || notification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);
  function showNotificationHandler(notificationData: any) {
    setNotification(notificationData);
  }
  function hideNotificationHandler() {
    setNotification(null);
  }

  const context = {
    notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}
export default NotificationContext;
