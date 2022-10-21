import {useEffect, useState} from "react";

function App2(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [dollar,setDollar] = useState(0);
    const [symbol,setSymbol]=useState();
    const [cost,setCost] = useState();
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => setCoins(json));
        setLoading(false);
        
    },[])
    const dollarChange =(event)=>{
        setDollar(event.target.value);
    }
    const coinChange = (event) =>{
        // setCoinValue(event.target.value);
        setSymbol( coins.filter(x=> x.id ===event.target.value)[0].symbol);
        setCost (coins.filter(x=> x.id ===event.target.value)[0].quotes.USD.price);
        console.log(cost,symbol);
    }
    return(
        <div>
            <h1>The Coins! {coins.length}개 가져옴</h1>
            {loading ? <strong>로딩중입니다..</strong> : null}
            <select onChange ={coinChange}>
                <option value="">코인을 선택하세요.</option>
                {coins.map((coin)=><option  key={coin.id} value={coin.id}>{coin.name} - {coin.symbol} : {(coin.quotes.USD.price).toFixed(2)}USD</option>)}
            </select>
            <input onChange={dollarChange} placeholder="달러를 입력하세요." type="number"></input>
            <label>달러</label>
            <hr />
            {dollar!==0 ?<label>{dollar}어치의 {dollar/cost}{symbol} </label> : null}
            <ul>{coins.map((coin) => <li key={coin.id}>{coin.name} {coin.symbol} : {coin.quotes.USD.price} USD</li>)}</ul>
        </div>
    )
}

export default App2;