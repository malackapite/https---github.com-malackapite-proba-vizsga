import React from "react";
import { useContext } from "react";
import AxiosContext from "./Axios";
import { useState } from "react";
import { useEffect } from "react";
import Kerdes from "./Kerdes";
import SelectMezo from "./SelectMezo";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Oldal() {
  const { get } = useContext(AxiosContext);
  const [valaszok, setValaszok] = useState(null);
  const [kerdesSzam, setKerdesSzam] = useState(0);
  const [pontszam, setPontszam] = useState(0);

  const kerdesNovel = () => {
    setKerdesSzam(kerdesSzam + 1);
  };

  const pontNovel = () => {
    setPontszam(pontszam + 1);
  };

  const getSzures = (id) => {
    get("http://localhost:8000/api/tesztek/kategoria/" + id).then((data) =>
      setValaszok(data)
    );
  };

  useEffect(() => {
    get("http://localhost:8000/api/tesztek").then((data) => setValaszok(data));
  }, [get]);

  const reset = () => {
    setKerdesSzam(0);
    setPontszam(0);
  };

  if (!valaszok) return <div>Töltés...</div>;

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Tesztkérdések</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <SelectMezo get={getSzures} reset={reset} />
        {valaszok.map((valasz) => (
          <div key={valasz.id}>
            <Kerdes
              valasz={valasz}
              setKerdesSzam={kerdesNovel}
              setPontszam={pontNovel}
            />
          </div>
        ))}
        <h3 className="mt-5" style={{ textAlign: "left" }}>
          Eredmény:
        </h3>
        <p style={{ textAlign: "left" }}>Pontszám: {pontszam}</p>
        <p style={{ textAlign: "left" }}>Kérdésszám: {kerdesSzam}</p>
      </Container>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Próba Vizsgafeladat 5 - 2023 teszt</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Oldal;
