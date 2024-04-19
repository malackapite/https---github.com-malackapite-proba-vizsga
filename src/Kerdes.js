import { Card } from "react-bootstrap";
import { useState } from "react";

function Kerdes(props) {
  const [Valasztott, setValasztott] = useState(null);

  const checkHelyes = (valasz) => {
    if (Valasztott) return;
    setValasztott(valasz);
    if (valasz === props.valasz.helyes) {
      props.setPontszam(props.pontszam + 1);
    }
    setValasztott(valasz);
    props.setKerdesSzam(props.kerdesSzam + 1);
  };

  const getVariant = (valasz) => {
    if (Valasztott === valasz) {
      return valasz === props.valasz.helyes ? 'bg-success' : 'bg-danger';
    }
    return 'bg-primary';
  };

  return (
    <Card className="mb-4">
      <Card.Header style={{ textAlign:"left", backgroundColor: "#515151", color:"white",}}>
       <h3>{props.valasz.kerdes}</h3>
      </Card.Header>
      <Card.Body>
        <div class="container">
          <div class="row">
              <div style={{cursor: "pointer", color: "white", paddingTop:"10px", paddingBottom:"10px", borderRadius: "10px"}} className={`col-md-6 col-12 ${getVariant(props.valasz.v1)}`} onClick={() => checkHelyes(props.valasz.v1)}>
                {props.valasz.v1}
              </div>
              <div style={{cursor: "pointer", color: "white", paddingTop:"10px", paddingBottom:"10px", borderRadius: "10px"}} className={`col-md-6 col-12 ${getVariant(props.valasz.v2)}`} onClick={() => checkHelyes(props.valasz.v2)}>
                {props.valasz.v2}
              </div>
          </div>
          <div class="row">
              <div style={{cursor: "pointer", color: "white", paddingTop:"10px", paddingBottom:"10px", borderRadius: "10px"}} className={`col-md-6 col-12 ${getVariant(props.valasz.v3)}`} onClick={() => checkHelyes(props.valasz.v3)}>
                {props.valasz.v3}
              </div>
              <div style={{cursor: "pointer", color: "white", paddingTop:"10px", paddingBottom:"10px", borderRadius: "10px"}} className={`col-md-6 col-12 ${getVariant(props.valasz.v4)}`} onClick={() => checkHelyes(props.valasz.v4)}>
                {props.valasz.v4}
              </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Kerdes;