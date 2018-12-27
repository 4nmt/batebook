import { getAccountAPI, followingsAPI } from '../../api/';
export const FETCH_FOLLOWINGS = 'FETCH_FOLLOWINGS';
export const UNFOLOWINGS = 'UNFOLOWINGS';

export const fetchFollowings = followings => ({
  type: FETCH_FOLLOWINGS,
  followings
});

export const unFollowings = followings => ({
  type: FETCH_FOLLOWINGS,
  followings
});

export const fetchFollowingsSrv = followings => {
  return async dispatch => {
    console.log(followings);
    try {
      let followingList = followings.map(async address => {
        const data = await getAccountAPI(address);
        const {
          address: ad,
          info: { name, picture }
        } = data;
        return { address: ad, name, picture };
      });
      followingList = await Promise.all(followingList);

      dispatch(fetchFollowings(followingList));
    } catch (e) {
      throw e;
    }
  };
};

export const FollowingsActionSrv = followings => {
  return async dispatch => {
    try{
      const res = await followingsAPI(followings)
      sessionStorage.setItem('followings', followings);
      alert("Followings Actions successfully")
    } catch (e) {
      throw e;
    }
  };
};