import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
              <SearchForm />

                <TransactionsTable>
                <tbody>
                <tr>
                  <td width="50%">Desenvolvimento de Site</td>
                  <td>
                    <PriceHighLight variant="income">
                      R$ 12.562,54    
                    </PriceHighLight> 
                  </td>
                  <td>Vendas</td>
                  <td>13/04/2022</td>
                </tr>

                <tr>
                  <td width="50%">Hamburguer</td>
                  <td>
                    <PriceHighLight variant="outcome">
                      - R$ 12.562,54 
                    </PriceHighLight>
                  </td>
                  <td>Alimentação</td>
                  <td>13/04/2022</td>
                </tr>
                </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}