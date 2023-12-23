export const CallbackNavFunc = (itemOfLink : string,callbackComponent : any ) => {
	itemOfLink === "Discussions"
    ? callbackComponent
    : itemOfLink === "Actus"
    ? callbackComponent
    : itemOfLink === "Appels"
    ? callbackComponent
    : "/";
}