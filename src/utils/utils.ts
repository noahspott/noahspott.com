export function getUrlFromPlatform(
  platform: string,
  socials: { platform: string; url: string }[],
) {
  return socials.find((social) => social.platform == platform)?.url;
}
