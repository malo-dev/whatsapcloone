export const CallbackNavFunc = (itemOfLink : string ) => {
	itemOfLink === "Discussions"
    ? "/discussions"
    : itemOfLink === "Actus"
    ? "/actus"
    : itemOfLink === "Appels"
    ? "/appels"
    : "/";
}