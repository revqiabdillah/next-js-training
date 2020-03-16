import withLayout from "../../Layout";
import { Grid, Button } from "@material-ui/core";
import Label from "../../common/Label";
import Field from "../../common/Field";
import useStyle from "./styles";

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h2>Customes</h2>
      <Grid container spacing={7}>
        <Grid item sm={6} lg={6}>
          <Label title="REGISTERED CUSTOMERS" />
          <p className={classes.credit}>If you have accout ples signin</p>
          <Field label="Email/Phone Number" required={true} />
          <Field label="Email/Phone Number" required={true} type="password" />
          <div className={classes.btnLogin}>
            <Button variant="contained" className={classes.btnSignin}>
              Signin
            </Button>
            <Button variant="text">Forgot Password ?</Button>
          </div>
        </Grid>
        <Grid item sm={6} lg={6}>
          <Label title="REGISTERED CUSTOMERS" />
          <p>Create account have many benefit</p>
          <Button variant="contained" className={classes.btnSignin}>
            Create an Account
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withLayout(Home);
