const initialState = {
  profile: null,
  subscriptions: []
};

const findSubscriptionIndex = (subscriptions, userId, podcastId) => {
  return subscriptions.findIndex(
    sub => sub.userId === userId && sub.podcastId === podcastId
  );
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "USER_REMOVE_SUBSCRIPTION": {
      const subscriptionIndex = findSubscriptionIndex(
        state.subscriptions,
        action.userId,
        action.podcastId
      );
      const subs = state.subscriptions.slice(0);
      subs.splice(subscriptionIndex, 1);
      return { ...state, subscriptions: subs };
    }
    case "USER_ADD_SUBSCRIPTION": {
      const subs = state.subscriptions.slice(0);
      subs.push({ userId: action.userId, podcastId: action.podcastId });
      return { ...state, subscriptions: subs };
    }
    default:
      return state;
  }
}
