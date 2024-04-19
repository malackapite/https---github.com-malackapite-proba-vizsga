import { Form } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import AxiosContext from './Axios';
import { Col, Row } from 'react-bootstrap';

function SelectMezo(props) {
    const {get} = useContext(AxiosContext);

    const [opciok, setOpciok] = useState(null);

    useEffect(() => {
        get("http://localhost:8000/api/kategoria").then(data => setOpciok(data));
    }, [get]);
  
    if(!opciok) return null;

    const elemValtozas = (event) => {
        props.get(event.target.value);
        props.reset();
    };

    return (
        <Form className="mb-5">
        <Row>
          <Form.Label column className='col-2'>Kategória:</Form.Label>
          <Col sm="10">
            <Form.Select onChange={elemValtozas}>
              {opciok.map((opcio) => (
                  <option key={opcio.id} value={opcio.id}>{opcio.kategoria}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
  );
}

export default SelectMezo;