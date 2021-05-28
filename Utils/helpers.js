import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Notifications, Permissions } from 'expo'
import * as  Notifications from 'expo-notifications';
import  * as Permissions from 'expo-permissions';
const NOTIFICATION_KEY = "MobileCards:Notifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: "Log Your Status",
    body: " 👋don't forget to log your ststus today",
    ios: {
      Sound: true,
    },
    android: {
      Sound: true,
      Priority: "high",
      Sticky: false,
      Vibrate: true,
    },
  };
}
export function setLocalNotification () {  
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}