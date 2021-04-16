/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface Global {
    analytics: {
      track: (name: string, data: T) => void;
      identify: (id: number, user: User) => void;
    };
  }
}

/* eslint-disable */
interface Window {
  analytics: {
    page: (url: string) => void;
    load: (id?: string) => void;
  };
  ReactNativeWebView: any;
  isRNWebView: any;
}
