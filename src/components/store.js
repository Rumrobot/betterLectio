import { writable } from "svelte/store";
import { localStore } from "localStore.js";
//import { get } from "./http.js";

export const alert = writable("Welcome to the to-do list app!");
export const mig = localStore("svelte-user-mig", "");