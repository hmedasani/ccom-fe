import { appMessages } from "./appMessages";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "RAI"
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An MVP for RAI"
export const APP_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"
export const PAGE_SIZE = process.env.PAGE_SIZE || 2

export default appMessages;

