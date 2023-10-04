const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
var upd;
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    if(upd){
        clearTimeout();
    }
    const ctype = form.elements.coinType.value;
    
    fetchPrice(ctype);
});

const fetchPrice= async(ctype) => {
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD/$(ctype)`)
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const name = r.data.coin.name;
    const symbol = r.data.coin.symbol;
    const priceChange1h = r.data.coin.priceChange1h;
   
    console.log(r)
    
    res.innerHTML = `<tr style= "border-radius: 9px;">
    <td>
        Property
    </td>
    <td>Value</td>
</tr>
<tr>
    <td>
       ${name}
    </td>
    <td>${price}</td>
</tr>
<tr>
    <td>
        volume
    </td>
    <td>${volume}</td>
</tr>
<tr>
    <td>
        symbol
    </td>
    <td>${symbol}</td>
</tr>
<tr>
    <td>
    priceChange1h
    </td>
    <td>${priceChange1h}</td>
</tr>`
upd = setTimeout(()=>fetchPrice(ctype),10000);
}
