// import { bindActionCreators } from 'redux';
// import { connect } from 'inferno-redux';

// export function reduxConnect (component) {
//     let mapStateToProps = component.connectStatesToProps || null;
//     let mapDispatchToProps = null;

//     if (component.connectActionsToProps) {
//         mapDispatchToProps = (dispatch) {
//             return bindActionCreators(component.connectActionsToProps(), dispatch);
//         }
//     }

//     return connect(mapStateToProps, mapDispatchToProps)(component);
// }