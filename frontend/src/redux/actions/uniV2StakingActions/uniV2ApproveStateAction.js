import Web3 from "web3";
import { StakingTokenContract, StakingUniV2Address } from "../../../config/new/StakingUniV2Config";
// import { StakingTokenContract, StakingRakis6Address } from "../../../config/new/StakingRakis6ConfigTest";

function uniV2ApproveStateAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const uniV2ApproveStateApi = await StakingTokenContract.methods.allowance(account, StakingUniV2Address).call();

                const uniV2ApproveState = Web3.utils.fromWei(String(uniV2ApproveStateApi), "ether");

                dispatch({
                    type: "UNIV2_STAKING_APPORVE_STATE",
                    payload: { uniV2ApproveState: uniV2ApproveState },
                });
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const uniV2ApproveStateAction = { uniV2ApproveStateAct };
