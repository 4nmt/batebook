import { getAccountAPI } from '../../api/';
export const FETCH_FOLLOWINGS = 'CHANGE_ACCOUNT';

export const fetchFollowings = followings => ({
  type: FETCH_FOLLOWINGS,
  followings
});

export const fetchFollowingsSrv = followings => {
  return async dispatch => {
    console.log(followings);

    try {
      let followingList = followings.map(async address => {
        const data = await getAccountAPI(address);
        
        const { info:{name, picture} } = data;
        return { name, picture };
      });
      followingList =  await Promise.all(followingList);
              
      dispatch(fetchFollowings(followingList));
    } catch (e) {
      throw e;
    }
  };
};
