import { useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase/compat/app";
function App() {
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      db.collection("emails").add({
        email: data,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setData("");
    }
  };
  return (
    <>
    <nav>
        <p><a href="#intrested">DIY kávé</a></p>
        <p><a href="#intrested">Vásárlás</a></p>
        <img src="images/logoszoveggel.svg" alt=""/>
        <p><a href="#intrested">Fenntarthatóság</a></p>
        <p><a href="#intrested">Rólunk</a></p>
    </nav>
    <section id="main">
        <div classNameName="content">
          <img className="main-big" src="images/logoszoveggel_feher.svg" alt="" />
          <p className="slogan">Naturally strong</p>
          <p className="points">vegan • sugar free • natural</p>
          <a className="btn" href="#intrested">Érdekel</a>
        </div>
      </section><section id="desc">
        <div className="desc">
          <div className="top-desc">
            <p>Mi az a</p>
            <p className="brandname">ColdBruh?</p>
          </div>
          <p> Bemutatjuk Magyarország első cold brew startup ötletét, amely egy természetesen magas koffeintartalmú, cukor nélküli italt kínál.
          </p>
          <p>Maradjon velünk az izgalmas frissítésekért, és legyen az elsők között, akik élvezhetik a cold brew egyedülálló élményét.</p>
          <div className="triangle"></div>
        </div>

      </section>
      <section id="perks">
        <div className="card">
          <img className="card-img" src="images/radix-icons_lightning-bolt.svg" alt="" />
          <p className="card-title">Energia</p>
          <p className="card-desc">Természetesen magas koffein tartalom
            (40mg / 100ml)</p>
        </div>
        <div className="card">
          <img className="card-img" src="images/Group 13.svg" alt="" />
          <p className="card-title">Blockchain</p>
          <p className="card-desc">Lekövethetőségért</p>
        </div>
        <div className="card">
          <img className="card-img" src="images/iconoir_vegan.svg" alt="" />
          <p className="card-title">Természetes</p>
          <p className="card-desc">Vegán, glutén mentes, cukormentes és 100% természetes</p>
        </div>
        <div className="card">
          <img className="card-img" src="images/carbon_chart-area-smooth.svg" alt="" />
          <p className="card-title">Krémes hatás</p>
          <p className="card-desc">Krémes és hideg, ahogy lennie kell</p>
        </div>
        <div className="bottom"></div>
      </section><section id="intrested">
        <div className="container">
          <p className="intrested-big">Légy az elsők között</p>
          <form action="">
            <div className="input-outer"><img src="images/sms 1.svg" alt=""/>
            <input
      type="email"
      onChange={(e) => setData(e.target.value)}
      value={data}
      placeholder="valami@gmail.com"
    ></input>
            </div>
            <button type="submit" onClick={handleSubmit}>
            Érdekel
    </button>
            </form>
            </div>
          </section>
          </>);}
          

          export default App;
