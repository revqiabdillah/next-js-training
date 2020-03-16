import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    field : {
        width : '100%',
        marginBottom : 40,
        display : 'flex',
        flexDirection : 'column'
    },
    label : {
        fontWeight : '600',
        marginBottom : 15,
        fontSize : 14
    },
    input : {
        borderRadius : 5,
        height : 40,
        border : '2px solid #bababa'
    }
})
