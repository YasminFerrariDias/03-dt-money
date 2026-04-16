import { ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styled";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#f75a68' />
        </header>
        <strong>R$17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>
        <strong>R$1.259,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>R$16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}