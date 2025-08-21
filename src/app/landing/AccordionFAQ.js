import React from "react";
import { Accordion } from 'react-bootstrap';
import{ useState, useEffect } from 'react';
import axios from 'axios';

const AccordionFAQ = () => {

  const [dataFAQ, setFAQ] = useState([]);

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/e94ghags7hoft')
      .then((response) => {
        console.log(response.data);
        setFAQ(response.data);
      })
      .catch((err) => {
        console.error('Error fetching logos:', err);
      });
  }, []);

  return (
    <div className="col-12">
      <Accordion defaultActiveKey="0">
        <div className="row">

          <div className="col-md-6 col-12">
            {dataFAQ.slice(0, 3).map((item, index) => (
              <Accordion.Item
                className="mb-4 rounded-4 overflow-hidden border-top"
                eventKey={index.toString()}
                key={index}
              >
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body className="border-top">{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </div>


          <div className="col-md-6 col-12">
            {dataFAQ.slice(3).map((item, index) => (
              <Accordion.Item
                className="mb-4 rounded-4 overflow-hidden border-top"
                eventKey={(index + 3).toString()}
                key={index + 3}
              >
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body className="border-top">{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default AccordionFAQ;
