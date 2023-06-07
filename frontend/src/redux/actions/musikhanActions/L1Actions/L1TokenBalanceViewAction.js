import { web3 } from "../../../../config/MusikhanConfig";

function L1TokenBalanceViewAct(account, L1Contract) {
    return async (dispatch) => {
        try {
            if (L1Contract._address) {
                const L1TokenBalanceOfApi = await L1Contract.methods.balanceOf(account).call();
                dispatch({
                    type: "L1_TOKEN_BALANCE_SUCCESS",
                    payload: {
                        L1TokenBalanceOf: web3.utils.fromWei(String(L1TokenBalanceOfApi), "ether"),
                    },
                });
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const L1TokenBalanceViewAction = { L1TokenBalanceViewAct };
