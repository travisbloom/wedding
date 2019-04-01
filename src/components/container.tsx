import React from 'react'
import { styled } from './styled'
import { Box } from './box'
import { theme } from '../theme'
import css from '@emotion/css'

export const Container = styled(Box)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 ${theme.space[3]}px;
  @media (min-width: ${theme.minSize.small}px) {
    max-width: 540px;
  }
  @media (min-width: ${theme.minSize.medium}px) {
    max-width: 720px;
  }
  @media (min-width: ${theme.minSize.large}px) {
    max-width: 960px;
  }
`

export const TextContainer = styled(Box)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${theme.minSize.small}px) {
    max-width: 540px;
  }
  @media (min-width: ${theme.minSize.medium}px) {
    max-width: 700px;
  }
`
