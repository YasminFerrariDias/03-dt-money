import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyled } from "./styles/global"
import { Transactions } from "./pages/Transactions"
import { TransactionsProvider } from "./contexts/TransactionsContex"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
