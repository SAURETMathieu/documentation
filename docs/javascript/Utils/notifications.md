---
id: notifications
title: Notifications
sidebar_label: Notifications
---

# Notifications en js

En développement web, une notification côté `front-end` fait référence à un message ou une alerte qui est affiché à l'utilisateur dans l'interface utilisateur de l'application. Ces notifications sont généralement utilisées pour informer l'utilisateur sur divers événements ou actions importantes qui se produisent dans l'application.

## Exemple d'implémentation de notifications

```js
let successTimeoutId;
let failTimeoutId;

const notifications = {

// fonction qui permet d'afficher la notification en cas de succes
  showSuccessNotification() {
    const notification = document.getElementById('successNotification');
    notification.classList.remove('hidden');

    if (successTimeoutId) {
      clearTimeout(successTimeoutId);
    }

    successTimeoutId = setTimeout(() => {
      notifications.closeSuccessNotification();
    }, 3000);
  },

// fonction qui permet de fermer la notification de succes
  closeSuccessNotification() {
    const notification = document.getElementById('successNotification');
    notification.classList.add('hidden');
  },

// fonction qui permet d'afficher la notification en cas d'échec
  showFailNotification() {
    const notification = document.getElementById('failNotification');
    notification.classList.remove('hidden');

    if (failTimeoutId) {
      clearTimeout(failTimeoutId);
    }

    failTimeoutId = setTimeout(() => {
      notifications.closeFailNotification();
    }, 3000);
  },

// fonction qui permet de fermer la notification d'échec
  closeFailNotification() {
    const notification = document.getElementById('failNotification');
    notification.classList.add('hidden');
  },

// initialisation des événements sur les éléments de notifications 
  initCloseNotification() {
    document
      .getElementById('closeButtonSuccess')
      .addEventListener('click', notifications.closeSuccessNotification);
    document
      .getElementById('closeButtonFail')
      .addEventListener('click', notifications.closeFailNotification);
  },

// fonction qui permet de changer le message dans la notification de succes
  editAndShowSuccessNotification(message) {
    const notificationMessage = document.querySelector('.success-message');
    notificationMessage.textContent = message;
    notifications.showSuccessNotification();
  },

// fonction qui permet de changer le message dans la notification d'échec
  editAndShowFailNotification(message) {
    const notificationMessage = document.querySelector('.fail-message');
    notificationMessage.textContent = message;
    notifications.showFailNotification();
  },
};

export default notifications;

```
