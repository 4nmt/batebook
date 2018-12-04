export const CHANGE_ACCOUNT = "CHANGE_ACCOUNT";

export function changeAccount(account) {
  return {
    type: CHANGE_ACCOUNT,
    account
  };
}
