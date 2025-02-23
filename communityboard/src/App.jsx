import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Kiosk from './components/Kiosk'

const App = () => {

  return (
    <div className="App">
      <img/>
      <div className="title strokeme">
        <h2>Best DMV</h2>
        <h1>Vintage</h1>
      </div>

      <div className="Stores">
        < Kiosk name="My Dead Aunt's Books" location="Hyattsville, MD" link="https://www.mydeadauntsbooks.com/" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALxXqbGXTnV9hu-kFAgFetCsjYK4ZKecoNw&s"/>
        < Kiosk name="Bespoke Not Broke" location="Takoma Park, MD" link="http://bespokenotbroke.com/" image="https://lh3.googleusercontent.com/p/AF1QipPZ9T1OBjRbAZJ7q32e3K-okmc4HAla9YGos9WT=s1360-w1360-h1020"/>
        < Kiosk name="Mercedes Bien Vintage" location="Washington, DC" link="https://www.instagram.com/mercedesbienvintage/?hl=en" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VPaCu6cDy3M2uVLtDtmztx2GCw01dv_5Cw&s"/>
        < Kiosk name="Joint Custody" location="Washington, DC" link="https://jointcustodydc.com/" image="https://lh5.googleusercontent.com/p/AF1QipMdgB-aH0XMJwtRYDkrjKlNZ0Fy6janE8dgwGEU=w520-h350-n-k-no"/>
        < Kiosk name="Fia's Fabulous Finds" location="Washington, DC" link="https://www.fiasfabulousfinds.com/" image="https://lh3.googleusercontent.com/p/AF1QipP-2TBXdLEVemPsKHPcvtUNLV506esroOU2NZzU=s1360-w1360-h1020"/>
        < Kiosk name="Inga's Once Is Not Enough" location="Washington, DC" link="https://www.ingasonceisnotenough.com/" image="https://lh3.googleusercontent.com/p/AF1QipM_hUJSYONaYX0k7Nku67w8vseDTj2TW4PyGX2t=s680-w680-h510"/>
        < Kiosk name="Home Court" location="Silver Spring, MD" link="https://www.instagram.com/homecourtdmv/?hl=en" image="https://wibridgedc.com/wp-content/uploads/2024/02/Homecourt_3-1024x762.png"/>
        < Kiosk name="Metro Club Vintage" location="Washington, DC" link="https://www.instagram.com/metroclubvintage_/" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cx6Uz7iDn8HlumZtqMgNH0HUozMtx1IwqA&s"/>
        < Kiosk name="Ella-Rue" location="Washington, DC" link="http://www.ella-rue.com/" image="https://images.squarespace-cdn.com/content/v1/5ed7c0b312878b717fb7c425/1683071323228-9MAZ76AOAQXGE8QV0OGM/IMG_3062.JPG"/>
        < Kiosk name="Georgetown Flea Market" location="Washington, DC" link="https://www.instagram.com/georgetownfleamarket/" image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFTujkNyfVSaY16GTIEz2tmUkUrcUsOTyHnoVjHiIYFQ7MdZGy"/>
        
      </div>
    </div>
  )
}

export default App