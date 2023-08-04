interface NotificationModal{
    message: string;
    title: string;
    success: boolean;
    onClose: () => boolean
}

interface ChoiceModal{
    message: string;
    title: string;
    onClose: () => boolean
    onAccept: () => boolean
}