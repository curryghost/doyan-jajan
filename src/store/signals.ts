import { signal } from "@preact/signals";
import type { FbUser } from "../hooks/firebase.type";

export interface State {
  cover: { url: string };
}

export const user = signal<FbUser | null>(null);
export const isAdmin = signal<boolean>(false);
export const generalLoading = signal<boolean>(false);
export const isLoginModalOpen = signal<boolean>(false);
export const state = signal<State | null>(null);
