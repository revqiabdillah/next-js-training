import useStyle from "./styles";
import {AppBar, Toolbar, InputBase, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
const menu = ['Women', 'Man', 'Gear', 'Training', 'Sale', 'Custom Menu']

const Component = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <ul className={classes.menu}>
        {
          menu.map((itm, indx) => (
            <li key={indx} className={classes.menuList}>
              <a className={classes.aList}>{itm.toUpperCase()}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Component;
