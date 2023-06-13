import { StakingTokenContract, StakingPrivateUniV2Contract, web3 } from "../../../../config/new/StakingPrivateUniV2Config";

function UniV2PrivateViewAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const privateStakingTokenBalanceApi = await StakingTokenContract.methods.balanceOf(account).call();

                const privateUniV2StakingTokenBalance = web3.utils.fromWei(String(privateStakingTokenBalanceApi), "ether");

                const privateTotalStakedApi = await StakingPrivateUniV2Contract.methods.totalSupply().call();
                const privateUniV2TotalStaked = web3.utils.fromWei(String(privateTotalStakedApi), "ether");

                const totalPrivateStakedAmountApi = await StakingPrivateUniV2Contract.methods.totalStakedAmount(account).call();

                const totalUniV2PrivateStakedAmount = web3.utils.fromWei(String(totalPrivateStakedAmountApi), "ether");

                dispatch({
                    type: "UNIV2_PRIVATE_VIEW_SUCCESS",
                    payload: {
                        privateUniV2StakingTokenBalance: privateUniV2StakingTokenBalance,
                        privateUniV2TotalStaked: privateUniV2TotalStaked,
                        totalUniV2PrivateStakedAmount: totalUniV2PrivateStakedAmount,
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

export const UniV2PrivateViewAction = { UniV2PrivateViewAct };
