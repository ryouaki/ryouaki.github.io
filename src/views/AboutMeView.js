import { connect } from 'react-redux';
import { action_init } from '../actions/actions';
import AboutMeContainer from './templates/aboutme/AboutMeContainer';

export default connect( 
    (store) => {
        return {
            data: store.reducer.data
        }
    }, 
    {
        action_init
    }
)(AboutMeContainer);