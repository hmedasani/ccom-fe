import "client-only"
import appMessages from "../constants";

export const utilClientOnly = () => {
    console.log(appMessages.warn.useWindowProps);
    return appMessages.warn.stayClientSide;
}