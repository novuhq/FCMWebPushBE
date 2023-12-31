
<div align="center">
  <a href="https://novu.co" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

# Novu FCM Demo App

This sample app demonstrates how to integrate Novu with Firebase Console Messaging (FCM) in a React app. This repo only contains Backend and you can find the [frontend](https://github.com/novuhq/fcmWebPushFE) in another repo.

You can refer to [this](https://docs.novu.co/channels-and-providers/push/fcm) guide to learn more about it.

## Configuration

### Create a free account in Novu

1. Go to [Novu](https://web.novu.co) and click Sign Up.
2. Use your GitHub Account to log in.

### Obtain Credentials
1. API-key from [your Novu dashboard](https://web.novu.co/settings).
2. SubscriberId to send notifications to.
3. WorkflowId of the workflow you want to trigger
4. DeviceToken of the device to send notifications to.

This project assumes you've added these credentials under the following identifiers in a `.env` file:

1. `NOVU_API_KEY`
2. `NOVU_SUB_ID`
3. `DEVICE_TOKEN`
4. `NOVU_WORKFLOW_ID`


## Run the project

To run the project, first, clone the repo.

```sh
npm install
```

You can start the project using:

```sh
npm run dev
```

## ⭐️ Why Novu?

Novu provides a unified API that makes it simple to send notifications through multiple channels, including In-App, Push, Email, SMS, and Chat.
With Novu, you can create custom workflows and define conditions for each channel, ensuring that your notifications are delivered in the most effective way possible.

## ✨ Features

- 🌈 Single API for all messaging providers (In-App, Email, SMS, Push, Chat)
- 💅 Easily manage notifications over multiple channels
- 🚀 Equipped with a CMS for advanced layouts and design management
- 🛡 Built-in protection for missing variables (Coming Soon)
- 📦 Easy to set up and integrate
- 🛡 Debug and analyze multi-channel messages in a single dashboard
- 📦 Embeddable notification center with real-time updates
- 👨‍💻 Community driven

---
