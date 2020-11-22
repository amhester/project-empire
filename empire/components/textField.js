import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const CustomTextField = withStyles({
  root: {
    marginBottom: '1rem',
    '& label': {
      fontSize: '2rem'
    },
    '& label.Mui-focused': {
      fontSize: '1rem'
    },
    '& .MuiInputLabel-shrink': {
      fontSize: '1rem'
    },
    '& input': {
      fontSize: '2rem !important'
    }
  }
})(TextField)

export default CustomTextField
