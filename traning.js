/*Visa och dölj svar på frågor*/
const ContentShowOrHide = (props) => {
    let heading = props.heading

    const [arrow, setCurrentArrow] = React.useState(<i className="fa-solid fa-chevron-down"></i>)

    const [text, setCurrentText] = React.useState("")
    const ShowOrHideText = () => {
        if (text ===""){
            setCurrentText(props.text);
            setCurrentArrow(<i class="fa-solid fa-chevron-up"></i>);
        } else {
            setCurrentText("");
            setCurrentArrow(<i className="fa-solid fa-chevron-down"></i>)
        }
        
    }
    return (
        <article className="workout-groups">
          <button className="heading" onClick={ShowOrHideText}><h2>{arrow} {heading}</h2></button>
          <p className="text">{text}</p>
        </article>
    )
}

/*Sökfunktion*/
//Tabell med frågor och svar
const HeadingsAndText = [
    {heading: "Knattetennis", text: "För åldrarna 5-7. Lek och lär en timme varje måndag kl 16-17 med vår tennispedagog Sara Bernard. Rullstolsanvändare är självklart välkommna. Gruppstorlek: 7-10 barn"},
    {heading: "Tennisskola: Grund (8-12 år)", text:  "Lär dig grunderna i tennis. Lek varavas med praktiska övningar för att strärka kordniation, balans och kondition. Blandad rullstolstennis och annan. 1,5 timme/vecka. Måndagar kl 17 eller torsdagar kl 17.30."},
    {heading: "Tennisskola: Fortsättning (10-15 år)", text: "Fortsättning från tennisskola grund, för dig som har gått minst två terminer i grund och går på mellanstadiet eller högstadiet. Blandad rullstolstennis och annan. 2 timmar i veckan på tisdagar eller torsdagar, med möjlighet att för extra träning på fredagar."},
    {heading: "Tävlingsgrupp (13-16 år)", text: "För dig som gått tennisskola fortsättning i minst två terminer och vill tävla. Träning onsdagar, fredagar och söndagar. 2 timmar/tillfälle. Viss träning med tävlingsgrupp rollstol"},
    {heading: "Tävlingsgrupp rullstol (13-16 år)", text: "För dig som vill tävla i rullstolsträning och har gått tennisskola fortsättning i minst två terminer. Träning tisdagar, fredagar och söndagar. 2 timmar/tillfälle. Viss träning med övrig tävlingsgrupp"},
    {heading: "Tennisskola: Grund (vuxen)", text: "För dig över 16 år som vill lära dig grunderna i att spela tennis. Blandad rullstolstennis och annan. Träning 1,5 timmar i veckan på torsdagar kl 19"},
    {heading: "Tennisskola: Fortsättning (vuxen)", text: "För dig över 16 år som gått minst två terminer i tennisskola grund eller kan tennisens grunder sen tidigare och nu vill lära dig mer för att på sikt nå till tävling. Blandad rullstolstennis och annan. 1.5 timmar varje måndag kl 17 och lördgar kl 9"},
    {heading: "Tävlingsgrupp (vuxen)", text: "För dig över 16 år som vill tävla i tennis. Träning 2-5 gånger i veckan beroende på egen ambitionsnivå. Träning till viss del blandad med tävlingsgrupp för rullstol"},
    {heading: "Tävlingsgrupp rullstol (vuxen)", text: "För dig över 16 år som vil tävla i rullstoltennis. Träning 2-5 gånger i veckan beroende på egen ambtionsnivå. Träning är till viss del blandad med övrig tävlingsgrupp"},
    {heading: "Motionsgrupp", text: "För dig över 16 år som vill spela tennins som motionsform. Träningar måndagar, onsdagar och söndagar kl 17-19. Du deltar på så månnga pass du vill. För dig som inte kan grunderna i tennis rekommender vi vår tennisskola grund (vuxen), i minst en termin. Blandad rullstoltennis och annan."},
    {heading: "Seniorgrupp", text: "För dig över 65 som vill träna med andra seniorer. Måndagar kl 12. Du är såklart också välkommen i motionsgruppen eller i tävlingsgrupp vuxen"}
]

const SearchBar = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const inputChange = (event) =>{
        setSearchValue(event.target.value)
    }

    //Sök igenom om input matchar någon fråga, spara i array
    const searchHeading = HeadingsAndText.filter((HeadingAndA) => {
        return HeadingAndA.heading.toLowerCase().includes(searchValue.toLowerCase())        
    })
   
    //sök igenom om input matchar något svar, spara i array
    const searchText = HeadingsAndText.filter((HeadingAndText) => {
        return HeadingAndText.text.toLowerCase().includes(searchValue.toLowerCase())
                
    })

    //Slå ihop arreyerna, sortera ut dubletter
    let searchHeadingAndText = searchHeading.concat(searchText)
    searchHeadingAndText = searchHeadingAndText.filter((element, index) => {
        return searchHeadingAndText.indexOf(element) === index
    })


    //Skriver ut sökruta, skriver ut frågor vars text matchar sökinput
    return (
        <div className="grid-container">
            <input 
                type="text" 
                name="search"  
                className="searchbar grid-span-two"  
                value={searchValue} 
                placeholder="Sök här.." 
                onChange={inputChange}>
            </input>
            
            {searchHeadingAndText.map((HeadingAndText) =>{
                return <ContentShowOrHide key={HeadingAndText.heading} heading={HeadingAndText.heading} text={HeadingAndText.text} />
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



