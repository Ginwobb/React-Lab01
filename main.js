function App() {
    const st1 = { color: 'coral', backgroundColor: '#F0F0F0', borderRadius: '20px', height: '250px', margin: '0 auto', padding: '10px' };
    const birthYear = new Date(1996, 9, 12); //1996-10-12
    const today = new Date(); 

    let year = today.getFullYear() - birthYear.getFullYear();
    let month = today.getMonth() - birthYear.getMonth();
    let day = today.getDate() - birthYear.getDate();

    if (day < 0) {
        month--;
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (month < 0) {
        year--;
        month += 12;
    }

    return (
        <div style={st1}>
            <h1>Suphapinya Nundecharbordi</h1>
            <hr />
            <p>age: {year}</p>
            <p>{year} Year {month} Month {day} Day</p>
            <p>my birthday: {birthYear.getFullYear()}/{birthYear.getMonth() + 1}/{birthYear.getDate()}</p>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />);