export interface ITheme {
  colors: {
    white: string
    lightGray: string
    gray: string
    graydark: string
    black: string
    offblue: string
  }
  radii: number[]
  fontWeights: number[]
  fontSizes: number[]
  fonts: {
    sansSerif: string
    serif: string
  }
  textShadow: string
  breakpoints: number[]
  minSize: {
    small: number
    medium: number
    large: number
    xlarge: number
  }
  maxSize: {
    xsmall: number
    small: number
    medium: number
    large: number
  }
}

export const theme: ITheme = {
  colors: {
    white: "#fff",
    lightGray: "lightgrey",
    gray: "#b2bcc1",
    graydark: "#748790",
    black: "#1c1c1c",
    offblue: "#A6C3D5",
  },
  radii: [2, 4, 8],
  fontWeights: [300, 600],
  fontSizes: [12, 14, 20, 32, 44],
  fonts: {
    sansSerif: "Raleway",
    serif: "'Parisienne', cursive",
  },
  textShadow: "1px 1px rgb(0, 0, 0, .3)",
  breakpoints: [576, 768, 992, 1200],
  minSize: {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
  },
  maxSize: {
    xsmall: 576 - 1,
    small: 768 - 1,
    medium: 992 - 1,
    large: 1200 - 1,
  },
}
