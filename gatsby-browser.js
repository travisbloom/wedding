import "typeface-parisienne"
import "typeface-raleway"

export { wrapRootElement } from "./src/gatsby/wrapRootElement"
export { wrapPageElement } from "./src/gatsby/wrapPageElement"

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement(`img`)
  if (
    typeof testImg.style.objectFit === `undefined` ||
    typeof testImg.style.objectPosition === `undefined`
  ) {
    import("object-fit-images").then(({ default: ObjectFitImages }) =>
      ObjectFitImages()
    )
  }
}
