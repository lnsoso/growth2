// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/cordova/plugins/Splashscreen.d.ts
interface Navigator {
    /** This plugin displays and hides a splash screen during application launch. */
    splashscreen: {
        /** Dismiss the splash screen. */
        hide(): void;
        /** Displays the splash screen. */
        show(): void;
    }
}