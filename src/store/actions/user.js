export const toggleSubscription = (userId, podcastId) => {
  return (dispatch, getState) => {
    // remove sub
    if (
      getState().user.subscriptions.find(
        sub => sub.podcastId === podcastId && sub.userId === userId
      )
    ) {
      dispatch({
        type: "USER_REMOVE_SUBSCRIPTION",
        podcastId,
        userId
      });
    } else {
      dispatch({
        type: "USER_ADD_SUBSCRIPTION",
        podcastId,
        userId
      });
    }
  };
};
