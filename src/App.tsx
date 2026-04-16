import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyled } from "./styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <h1>Hellow World</h1>
    </ThemeProvider>
  )
}
