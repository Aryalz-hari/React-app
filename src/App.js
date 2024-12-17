
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expense =[{
    title:"CarInsurance",
    date:new Date(2021,2,23),
    amount:267
  },
{
   title:"Window",
    date:new Date(2021,2,23),
    amount:200
},{
    title:"Health",
    date:new Date(2021,2,23),
    amount:267
  },
];
  return (
      <div>
        <h2>Let's Get started</h2>
        <ExpenseItem title={expense[0].title}
        amount={expense[0].amount} 
        date={expense[0].date}></ExpenseItem>
       <ExpenseItem title={expense[1].title}
        amount={expense[1].amount} 
        date={expense[1].date}></ExpenseItem>
               <ExpenseItem title={expense[2].title}
        amount={expense[2].amount} 
        date={expense[2].date}></ExpenseItem>
      

</div>
  );
}

export default App;
