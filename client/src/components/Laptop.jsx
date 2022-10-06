import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import laptopUrl from "../assets/images/snoopy.gif";

function Laptop(props) {
  const renderTooltip = (info) => (
    <Tooltip id="laptop-tooltip" {...info}>
       {props.webcam ? (
            <p>
              Live from{" "}
              {props.webcam.title}.
            </p>
          ) : (
            <p>Hello World!</p>
          )}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      overlay={renderTooltip}
    >
      <div 
      id="laptop"
      role="img"
      style={{
        backgroundImage: `url(${laptopUrl})`,
      }}/>
    </OverlayTrigger>
  );
}

export default Laptop;
