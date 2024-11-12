// Gemini AI assisted code

import React, { useState } from "react";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

import "../styles/PriceTrackerCommunity.css";

const PriceTrackerCommunity = React.memo(() => {
  const { theme } = useTheme();

  const [inputs, setInputs] = useState([{ name: "", value: "" }]);
  const [inputsWebsite, setWebsiteInputs] = useState([{ name: "", value: "" }]);

  const handleInputChange = (index, field, value) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  };

  const handleInputWebsiteChange = (index, field, value) => {
    setWebsiteInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  };

  const addInput = () => {
    setInputs([...inputs, { name: "", value: "" }]);
  };

  const removeInput = (index) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs.splice(index, 1);
      return updatedInputs;
    });
  };

  const [showToastMessage, setShowToastMessage] = useState(
    "Review Submitted to the Website"
  );

  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const toggleShowToastSuccess = () => setShowToastSuccess(!showToastSuccess);

  const [showToastFail, setShowToastFail] = useState(false);
  const toggleShowToastFail = () => setShowToastFail(!showToastFail);
  const removeSubmitButton = (index) => {
    setShowToastSuccess(true);
  };

  return (
    <>
      {/** Add Button for Products To Track */}
      <Button className="add-card" variant={theme} onClick={addInput}>
        Add Review
      </Button>
      {/** Add Products for Products To Track */}

      <Form>
        <div className="price-tracker-community">
          {inputs.map((input, index) => (
            <Form.Group key={index} controlId={`input-${index}`}>
              <Form.Control
                className="price-tracker-community-inputs"
                type="text"
                name="product_name"
                placeholder="Enter Product Name"
                value={input.name}
                required={true}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
              <Form.Control
                className="price-tracker-community-inputs"
                type="text"
                placeholder="Enter Website Name"
                value={inputsWebsite.name}
                required={true}
                onChange={(e) =>
                  handleInputWebsiteChange(index, "name", e.target.value)
                }
              />
              <Form.Control
                className="price-tracker-community-inputs"
                as="textarea"
                rows={3}
                placeholder="Enter Product Review"
                value={input.value}
                required={true}
                onChange={(e) =>
                  handleInputChange(index, "value", e.target.value)
                }
              />
              <Button
                className="price-tracker-community-remove-button"
                variant="danger"
                onClick={() => removeInput(index)}
              >
                Remove
              </Button>
              <Button
                className="price-tracker-community-submit-button"
                variant="success"
                onClick={() => removeSubmitButton(index)}
              >
                Submit Review
              </Button>
              <br />
              <br />
              <br />
            </Form.Group>
          ))}
        </div>
      </Form>

      {/*This is Toast Component to show review sent*/}
      <ToastContainer className="p-3" position="bottom-center">
        <Toast
          className="toast-center"
          show={showToastSuccess}
          onClose={toggleShowToastSuccess}
          delay={3000}
          autohide={true}
          bg="success"
        >
          <Toast.Body className={"text-white"}>
            Review Submitted to the Website
          </Toast.Body>
        </Toast>
      </ToastContainer>
      {/*This is Toast Component to show review sent*/}

      {/*This is Toast Component to show review not sent*/}
      <ToastContainer className="p-3" position="bottom-center">
        <Toast
          className="toast-center"
          show={showToastFail}
          onClose={toggleShowToastFail}
          delay={3000}
          autohide={true}
          bg="danger"
        >
          <Toast.Body className={"text-white"}>
            Review Submitted to the Website
          </Toast.Body>
        </Toast>
      </ToastContainer>
      {/*This is Toast Component to show review not sent*/}
    </>
  );
});

export default PriceTrackerCommunity;
