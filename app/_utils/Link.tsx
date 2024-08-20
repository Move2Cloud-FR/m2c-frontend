// Methods
export const openExternalLink = (event: any, link?: string) => {
  event.stopPropagation();
  if (!link) return;
  window.open(link, "_blank", "noreferrer");
};
