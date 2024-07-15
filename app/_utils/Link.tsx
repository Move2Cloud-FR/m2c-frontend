// Methods
export const openExternalLink = (event: any, link: string) => {
  event.stopPropagation();
  window.open(link, "_blank", "noreferrer");
};
