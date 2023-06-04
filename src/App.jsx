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
      <img src="images/logoszoveggel.svg" alt="" />
    </nav><section id="main">
        <div classNameName="content">
          <img className="main-big" src="images/logoszoveggel_feher.svg" alt="" />
          <p className="slogan">Naturally strong</p>
          <p className="points">vegan • sugar free • natural</p>
          <a className="btn" href="#intrested">I'm intrested</a>
        </div>
      </section><section id="desc">
        <div className="desc">
          <div className="top-desc">
            <p>What is</p>
            <p className="brandname">ColdBruh?</p>
          </div>
          <p> Introducing Hungary's first cold brew startup idea, offering a naturally high-caffeine beverage with no sugar. Our
            vegan-friendly cold brew embraces blockchain technology for transparency and trust in the coffee industry.
          </p>
          <div className="triangle"></div>
        </div>

      </section>
      <section id="perks">
        <div className="card">
          <img className="card-img" src="images/radix-icons_lightning-bolt.svg" alt="" />
          <p className="card-title">Energy</p>
          <p className="card-desc">Naturally high caffeine content
            40mg / 100ml</p>
        </div>
        <div className="card">
          <img className="card-img" src="images/Group 13.svg" alt="" />
          <p className="card-title">Blockchain</p>
          <p className="card-desc">For transparency and trust</p>
        </div>
        <div className="card">
          <img className="card-img" src="images/iconoir_vegan.svg" alt="" />
          <p className="card-title">Natural</p>
          <p className="card-desc">Vegan, gluten free, sugar free and 100% natural</p>
        </div>
        <div className="card">
          <img className="card-img" src="images/carbon_chart-area-smooth.svg" alt="" />
          <p className="card-title">Smooth texture</p>
          <p className="card-desc">Smooth and cold as it should be</p>
        </div>
        <div className="bottom"></div>
      </section><section id="intrested">
        <div className="container">
          <p className="intrested-big">Intrested?</p>
          <form action="">
            <div className="input-outer"><img src="images/sms 1.svg" alt=""/>
            <input
      type="email"
      onChange={(e) => setData(e.target.value)}
      value={data}
      placeholder="example@gmail.com"
    ></input>
            </div>
            <button type="submit" onClick={handleSubmit}>
            I'm intrested
    </button>
            </form>
            </div>
          </section>
          </>);}
          

          export default App;
