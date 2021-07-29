declare module "@adguard/assistant" {
    interface Callback {
        (ruleText: string): void
    }

    interface Assistant {
        start: (element: HTMLElement | null, callback: Callback) => void,
        close: () => void,
    }

    export function adguardAssistant(): Assistant;
}
