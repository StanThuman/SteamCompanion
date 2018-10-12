import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import UserSearch from '../components/UserSearch';

// const styles = themes => ({
//   root: {
//     ...themes.mixins.gutters(),
//     paddingTop: themes.spacing.unit * 2,
//     paddingBottom: themes.spacing.unit * 2
//   }
// })


const mapStateToProps = state => ({
  title: 'User Search'
});

const mapDispatchToProps = dispatch => ({
  handleClick: (event) => {
    console.log("SLDJKFSLDKJFLSDKJFLSKDJF");
  }
})








export default connect(mapStateToProps, mapDispatchToProps)(UserSearch)
