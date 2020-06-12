import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
      .then(res => window.localStorage.setItem('users', JSON.stringify(res.users)));
};

export const fetchUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

export const updateUser = (user, id) => dispatch => {
  return UserAPIUtil.updateUser(user, id)
    .then(user => dispatch(receiveUser(user)));
};
