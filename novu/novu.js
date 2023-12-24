import { Novu, PushProviderIdEnum } from '@novu/node';

export const inAppNotification = async (title, body) => {

    const novu = new Novu(process.env.NOVU_API_KEY);
    // console.log("native ", process.env.NOVU_API_KEY);
    // console.log('pre identify')
    await novu.subscribers.identify(process.env.NOVU_SUB_ID, {
        firstName: "pushSubscriber"
    });

    // console.log('pre set cred')

    await novu.subscribers.setCredentials(process.env.NOVU_SUB_ID, PushProviderIdEnum.FCM, {
        deviceTokens: [process.env.DEVICE_TOKEN],
    });

    // console.log('after set cred')
    novu.trigger(process.env.NOVU_WORKFLOW_ID, {
        to: {
            subscriberId: process.env.NOVU_SUB_ID
        },
        payload: {
            title: title,
            body: body
        },
    });
};