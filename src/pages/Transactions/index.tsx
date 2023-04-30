
import { useContextSelector } from "use-context-selector";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/header";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter,dateformatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { PriceHeighLight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {

   const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
   });

    return (
        <div>
           < Header /> 
           <Summary />

           <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHeighLight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHeighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateformatter.format(new Date (transaction.createdAt))}</td>
                            </tr>
                            )
                    })}
                   
                    
                </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}


