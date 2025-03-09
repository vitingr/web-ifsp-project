export const subscribeGoogleTag = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      pagePath: window.location.pathname,
    })
  }
}
