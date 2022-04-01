import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: function (notificationData) {}, // helps w autocomplition ide later
  hideNotification: function () {},
});

export function NotificationContextProvider(props) { // will manage the state that will be distributed in child components through context
  const [activeNotification, setActiveNotification] = useState(); // stores the notification

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) { // notification that should be shown
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  // bundle in one object my notification data and pointers of this functions handlers show and hide
  // it will be distribute it to the other components
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}> 
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;