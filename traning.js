/*Visa och dölj svar på frågor*/
const ContentShowOrHide = (props) => {
    let question = props.question

    const [arrow, setCurrentArrow] = React.useState(<i className="fa-solid fa-chevron-down"></i>)

    const [answer, setCurrentAnswer] = React.useState("")
    const ShowOrHideAnswer = () => {
        if (answer ===""){
            setCurrentAnswer(props.answer);
            setCurrentArrow(<i class="fa-solid fa-chevron-up"></i>);
        } else {
            setCurrentAnswer("");
            setCurrentArrow(<i className="fa-solid fa-chevron-down"></i>)
        }
        
    }
    return (
        <article className="FAQ">
          <button className="question" onClick={ShowOrHideAnswer}><h2>{arrow} {question}</h2></button>
          <p className="answer">{answer}</p>
        </article>
    )
}

/*Sökfunktion*/
//Tabell med frågor och svar
const QAndAs = [
    {question: "Knattetennis", answer: "För åldrarna 5-7. Lek och lär en timme varje måndag kl 16-17 med vår tennispedagog Sara Bernard. Gruppstorlek: 7-10 barn"},
    {question: "Tennisskola: Grund (8-12 år)", answer:  "Lär dig grunderna i tennis. Lek varavas med praktiska övningar för att strärka kordniation, balans och kondition. 1,5 timme/vecka. Måndagar kl 17 eller torsdagar kl 17.30."},
    {question: "Tennisskola: Fortsättning (10-15 år)", answer: "Fortsättning från tennisskola grund, för dig som har gått minst två terminer i grund och går på mellanstadiet eller högstadiet. 2 timmar i veckan på tisdagar eller torsdagar, med möjlighet att för extra träning på fredagar."},
]

const SearchBar = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const inputChange = (event) =>{
        setSearchValue(event.target.value)
    }

    //Sök igenom om input matchar någon fråga, spara i array
    const searchQ = QAndAs.filter((QAndA) => {
        return QAndA.question.toLowerCase().includes(searchValue.toLowerCase())        
    })
   
    //sök igenom om input matchar något svar, spara i array
    const searchA = QAndAs.filter((QAndA) => {
        return QAndA.answer.toLowerCase().includes(searchValue.toLowerCase())
                
    })

    //Slå ihop arreyerna, sortera ut dubletter
    let searchQandA = searchQ.concat(searchA)
    searchQandA = searchQandA.filter((element, index) => {
        return searchQandA.indexOf(element) === index
    })


    //Skriver ut sökruta, skriver ut frågor vars text matchar sökinput
    return (
        <div>
            <input 
                type="text" 
                name="search"  
                className="searchbar"  
                value={searchValue} 
                placeholder="Sök här.." 
                onChange={inputChange}>
            </input>
            
            {searchQandA.map((QandA) =>{
                return <ContentShowOrHide key={QandA.question} question={QandA.question} answer={QandA.answer} />
            })
            }
        </div>
    )
}




//Visa frågor på sidan
const reactContentRoot = document.getElementById("root");

const App = () => {
    return (
        <div>
            <SearchBar/>
      </div>
    )
}
ReactDOM.render(<App />, reactContentRoot);



