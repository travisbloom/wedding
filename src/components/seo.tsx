import React from 'react'
import { Helmet } from 'react-helmet'
import { Location } from '@reach/router'
import { fullUrl } from '../utilities/urls'
import _ from 'lodash'
import { APP_CONFIG } from '../appConfig'
import { isServerRendering } from '../utilities/executionEnvironment'

export interface ISeoProps {
  description?: string
  title: string
  image?: {
    url: string
    height?: number
    width?: number
  }
  pathname?: string
}

const addTrailingSlash = (str: string) => (_.endsWith(str, '/') ? str : `${str}/`)

export const SEO: React.SFC<ISeoProps> = ({ title, description, image: passedImage, pathname }) => {
  const image = passedImage!
  return (
    <Location>
      {({ location }) => {
        const url = addTrailingSlash(fullUrl(pathname || location.pathname))
        return (
          <Helmet title={title} titleTemplate={'%s | Travis Bloom'} htmlAttributes={{ lang: 'en' }}>
            <meta name="description" content={description} />
            <meta name="image" content={image.url} />
            <link rel="canonical" href={url} />
            {image.width && <meta property="og:image:width" content={`${image.width}`} />}
            {image.height && <meta property="og:image:height" content={`${image.height}`} />}
            <meta property="og:url" content={image.url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image.url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image.url} />
          </Helmet>
        )
      }}
    </Location>
  )
}

SEO.defaultProps = {
  description:
    'Pawlicy Advisor is bringing transparency to pet insurance. We help you compare breed-specific insurance plans for free. Make sure you get the right plan at the right price.',
  image: {
    url: 'https://www.pawlicy.com/og-image.jpg',
    height: 707,
    width: 1351,
  },
}

if (
  APP_CONFIG.environment === 'production' &&
  typeof console !== 'undefined' &&
  console.log &&
  !isServerRendering
) {
  console.log(
    `%c 
____________________________________________________________
<checking out my 1337 codez? Let's chat: travis bloom at gmail dot com>
------------------------------------------------------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                ||----- |
                ||     ||
    `,
    'font-family:monospace',
  )
}
