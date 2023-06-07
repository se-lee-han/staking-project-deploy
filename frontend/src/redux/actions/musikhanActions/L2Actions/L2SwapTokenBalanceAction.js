import { web3 } from "../../../../config/MusikhanConfig";

function L2SwapTokenBalanceAct(account, L2SwapContract) {
    return async (dispatch) => {
        try {
            const L2SwapTokenBalanceApi = await L2SwapContract.methods.balanceOf(account).call();
            dispatch({
                type: "L2_SWAP_TOKEN_BALANCE",
                payload: {
                    L2SwapTokenBalance: web3.utils.fromWei(String(L2SwapTokenBalanceApi), "ether"),
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const L2SwapTokenBalanceAction = { L2SwapTokenBalanceAct };
