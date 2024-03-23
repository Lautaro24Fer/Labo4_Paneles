import Panel from "./components/Panel.jsx";
import dataJSON from "./data.json";
import { useState } from "react";

export default function Prueba() {
  const [panels, setPanels] = useState([false, false, false, false, false]);

  const handleShowPanel = (indexOfPanel) => {
    const newPanels = [false, false, false, false, false];
    if (panels[indexOfPanel] === true) {
      return setPanels(newPanels);
    }
    newPanels[indexOfPanel] = true;
    setPanels(newPanels);
  };

  return (
    <main className="container">
      {dataJSON.map((panel, index) => {
        return (
          <Panel
            key={index}
            isPanelActive={panels[index]}
            backgroundUrl={panel.backgroundUrl}
            title={panel.title}
            index={index}
            changeStatusOfPanels={handleShowPanel}
          />
        );
      })}
    </main>
  );
}
