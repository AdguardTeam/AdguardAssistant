declare module "@adguard/assistant" {
    interface Assistant {
        start: (element: HTMLElement | null, callback) => void,
        stop: () => void,
    }

    export function adguardAssistant(): Assistant;
}
