import react from "react"; 
import Alert from "react-bootstrap/Alert"
import 'bootstrap/dist/css/bootstrap.css';
const Second = () => {
  return ( 
      <div> 
        <Alert variant="success" style={{ width: "42rem" }}> 
          <Alert.Heading> 
            This is a success alert which has green background 
          </Alert.Heading> 
        </Alert> 
    
        <Alert variant="secondary" style={{ width: "42rem" }}> 
          <Alert.Heading> 
            This is a secondary alert which has grey background 
          </Alert.Heading> 
        </Alert> 
    
        <Alert variant="primary" style={{ width: "42rem" }}> 
          <Alert.Heading> 
            This is a primary alert which has blue background 
          </Alert.Heading> 
        </Alert> 
        </div>
); }
export default Second;