export function changeTitle(newTitle, useLogo = true) {
  document.title = useLogo ? `${newTitle}TechByte Learning` : newTitle;
}
