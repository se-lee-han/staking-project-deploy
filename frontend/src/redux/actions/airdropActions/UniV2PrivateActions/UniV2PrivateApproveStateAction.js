import { StakingTokenContract, StakingPrivateUniV2Address, web3 } from "../../../../config/new/StakingPrivateUniV2Config";

function UniV2PrivateApproveStateAct(account) {
    return async (dispatch) => {
        try {
            const privateUniV2AllowanceApi = await StakingTokenContract.methods.allowance(account, StakingPrivateUniV2Address).call({ from: account });

            const privateUniV2Allowance = web3.utils.fromWei(String(privateUniV2AllowanceApi), "ether");

            dispatch({
                type: "PRIVATE_UNIV2_APPROVE_STATE",
                payload: { privateUniV2Allowance: privateUniV2Allowance },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const UniV2PrivateApproveStateAction = { UniV2PrivateApproveStateAct };
