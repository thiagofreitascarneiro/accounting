import { Summary } from "../../components/Summary";
import { Header } from "../../components/header";
import { SearchForm } from "./components/SearchForm";
import { SearchFormContainer } from "./components/SearchForm/styles";
import { PriceHeighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
           < Header /> 
           <Summary />

           <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHeighLight variant="income">
                                R$ 12.000,00
                            </PriceHeighLight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburger</td>
                        <td>
                            <PriceHeighLight variant="outcome">
                                -R$ 59,00
                            </PriceHeighLight>
                        </td>
                        
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                    
                </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}