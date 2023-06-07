import { HanBonusStakingContract, HanChainContract, web3 } from "../../../config/StakingHanChain";
// import { StakingHanChainContract, MyTokenContract } from "../../../config/StakingHanchainTest";

function hanStakingViewAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const hanChainBalanceOfApi = await HanChainContract.methods.balanceOf(account).call();

                const hanChainBalanceOf = web3.utils.fromWei(String(hanChainBalanceOfApi), "ether");

                const totalSupplyApi = await HanBonusStakingContract.methods.totalSupply().call();

                const totalSupply = web3.utils.fromWei(String(totalSupplyApi), "ether");

                const totalStakedAmountApi = await HanBonusStakingContract.methods.totalStakedAmount(account).call();

                const totalHanStakedAmount = web3.utils.fromWei(String(totalStakedAmountApi), "ether");

                dispatch({
                    type: "HAN_STAKING_VIEW",
                    payload: {
                        totalSupply: totalSupply,
                        hanChainBalanceOf: hanChainBalanceOf,
                        totalHanStakedAmount: totalHanStakedAmount,
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

export const hanStakingViewAction = { hanStakingViewAct };
