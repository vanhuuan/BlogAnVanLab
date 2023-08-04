export interface NotificationModal{
    message: string;
    title: string;
    success: boolean;
    onClose: () => boolean
}

export interface ChoiceModal{
    message: string;
    title: string;
    onClose: () => boolean
    onAccept: () => boolean
}