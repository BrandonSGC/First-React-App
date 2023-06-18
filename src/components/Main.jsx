import "./Tecnologias";
import React from "react";
import reactLogo from "../img/react.png";
import gitLogo from "../img/git.png";
import githubLogo from "../img/github.ico";
import nodejsLogo from "../img/nodejs.png";
import expressLogo from "../img/express.png";
import mysqlLogo from "../img/mysql.png";
import sqlServerLogo from "../img/sql-server.png";

export function Main({ clientName }) {
  return (
    <main className="main">
      <div className="main__contenedor">
        <div className="main__display">
          <div className="main__texto">
            <h1 className="main__heading">{clientName}</h1>
            <h3 className="main__tecnologias">Tecnologías usadas:</h3>
          </div>
          <div className="main__logos">
            <img src={reactLogo} alt="React" className="main__logo" />
            <img src={gitLogo} alt="Git" className="main__logo" />
            <img src={githubLogo} alt="GitHub" className="main__logo" />
            <img src={nodejsLogo} alt="Node.js" className="main__logo" />
            <img src={expressLogo} alt="Express" className="main__logo" />
            <img src={mysqlLogo} alt="MySQL" className="main__logo" />
            <img src={sqlServerLogo} alt="SQL Server" className="main__logo" />
          </div>
        </div>
      </div>
    </main>
  );
}
