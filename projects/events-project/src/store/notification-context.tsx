'use client';

import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData: any) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider(props: any) {
  const { children } = props;
  const [notification, setNotification] = useState(null);
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
