import useStyle from "./styles";
import { Divider } from "@material-ui/core";

const Component = ({title}) => {
  const classes = useStyle();
  return (
    <div className={classes.label}>
      <h4 className={classes.title}>{title.toUpperCase()}</h4>
      <Divider style={{ borderBottom : '2px solid black' }} /> 
    </div>
  );
};

export default Component;
