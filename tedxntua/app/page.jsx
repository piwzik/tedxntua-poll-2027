'use client'
import { useState } from "react";

export default function Home() {
  const options = ["Moires", "Anisotropia", "Reflect", "Cycle 0", "Synelixis"]
  const [selected, setSelected] = useState([])

  function checkboxHandler(opt) {
    setSelected((s) => s.includes(opt) ? s.filter(i => i !== opt) : [...s, opt])
  }

  
  return (
    <>
      <main className="m-2">
        <h2>Επιλέξτε θέμα για το TEDxNTUA 2027</h2>
        <p>Selected: {selected.length}</p>
        <div className="flex flex-col p-2">
          {options.map((opt) => (
            <label key={opt}>
              <input type="checkbox"  onChange={checkboxHandler} />
              <span className="pl-1">{opt}</span>
            </label>
          ))}
        </div>
      </main>
    </>
  );
}
