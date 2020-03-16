import useStyle from "./styles";
import { TextField } from "@material-ui/core";

const Component = ({label, required}) => {
  const classes = useStyle();
  return (
    <div className={classes.field}>
      <p className={classes.label}>{label}{required && <span style={{color:'#ff0000'}}>*</span>} </p>
      <input className={classes.input}></input>
    </div>
  );
};

export default Component;
