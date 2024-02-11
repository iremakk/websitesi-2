const Haberler =() =>  {
    const getNews = async () => {
        const response =await = fetch("https://www.meram.bel.tr/haberler");
        setHaberler(response.articles);
    }

   return <div className="row">
    <div className="column">
     <div className="content">
       <img src="mountains.jpg" alt="Mountains" style={{ width: "100%" }} />
       <h3>Haber</h3>
       <p>Haber sayfasi</p>
     </div>
    </div>
   </div>
const Haberler = document.querySelector("#haberler");
ReactDOM.render(React.createElement(Haberler), Haberler);
