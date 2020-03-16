import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    footer : {
        padding : 10,
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        backgroundColor : '#3a3c3e',
        position : 'absolute',
        bottom : '0',
        height : 250,
        marginTop : 70
    },
    logo : {
        margin : 10,
        maxWidth : 100,
        justifyContent : 'flex-start'
    },

    cartIcon : {
        justifyContent : 'flex-end',
        fontSize : 30,
        marginRight : 20
    },
})
