
export const signIn = (credentials) => {
  return (dispatch, getState, {getfirebase}) => {
    const firebase = getfirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signOut =() =>{
  return(dispatch, getState,{getfirebase}) => {
    const firebase = getfirebase();
    firebase.auth().signOut().then(()=>{
      dispatch({type: "SIGNOUT_SUCCESS"})
    });
  }
}