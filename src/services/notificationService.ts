import { NotificationManager } from "react-notifications"

const createNotificationService = () => {
    const showErrorNotifiction = (errorMessage: string) => {
        NotificationManager.error(errorMessage);
    };

    const showSuccessNotification = (successMessage: string) => {
        NotificationManager.success(successMessage);
    };

    const showInfoNotification = (infoMessage: string) => {
        NotificationManager.info(infoMessage);
    };

    const showWarningNotification = (warningMessage: string) => {
        NotificationManager.warning(warningMessage)
    }

    return {showErrorNotifiction,showSuccessNotification,showInfoNotification,showWarningNotification};
};

export const notificationService = createNotificationService();