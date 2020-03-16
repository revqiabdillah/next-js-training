import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  menu: {
    "list-style-type": "none",
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: "#ffffff"
  },
  menuList: {
    float: "left"
  },
  aList : {
    display: 'block',
    color: 'black',
    textAlign: 'center',
    fontWeight : 'bold',
    fontSize : 18,
    padding: "14px 16px",
    textDecoration: "none",
    '&hover' : {
        backgroundColor : '#333'
    }
  }
})
