import useStyle from "./styles";
// const logo = require('../../../assets/img/logo-swift.webp')
import { ShoppingCart } from "@material-ui/icons";
const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png";

const Component = () => {
  const classes = useStyle();
  return (
    <div className={classes.top}>
      <img src='/img/logo-swift.webp' className={classes.logo}/>
      <ShoppingCart className={classes.cartIcon} />
    </div>
  );
};

export default Component;
