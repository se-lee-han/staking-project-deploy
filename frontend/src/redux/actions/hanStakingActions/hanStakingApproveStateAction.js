import { HanChainContract, HanBonusStakingAddress, web3 } from "../../../config/StakingHanChain";
// import { MyTokenContract, StakingHanChainAddress } from "../../../config/StakingHanchainTest";

function hanStakingApproveStateAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const hanChainAllowanceApi = await HanChainContract.methods.allowance(account, HanBonusStakingAddress).call();

                const hanChainAllowance = web3.utils.fromWei(String(hanChainAllowanceApi), "ether");

                // console.log(hanChainAllowance);

                dispatch({
                    type: "HAN_CHAIN_APPROVE_STATE",
                    payload: { hanChainAllowance: hanChainAllowance },
                });
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const hanStakingApproveStateAction = { hanStakingApproveStateAct };
