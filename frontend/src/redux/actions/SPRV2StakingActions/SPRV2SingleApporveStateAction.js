import BigNumber from "bignumber.js";
import { SPRV2StakingContract } from "../../../config/new/StakingSPRV2Config";

function SPRV2SingleApporveStateAct(stakingMunieTokenId, account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                const getSPRV2SingleApprovedApi = await SPRV2StakingContract.methods.getApproved(stakingMunieTokenId).call();

                // 유효성 검사를 수행하여 잘못된 BigNumber 문자열 값인지 확인
                if (BigNumber.isBigNumber(getSPRV2SingleApprovedApi)) {
                    dispatch({
                        type: "GET_SPRV2_SINGLE_APPROVE_STATE_VIEW",
                        payload: {
                            getSPRV2SingleApproved: getSPRV2SingleApprovedApi,
                        },
                    });
                } else {
                    throw new Error("Invalid BigNumber string"); // 유효하지 않은 BigNumber 문자열 값인 경우 에러 throw
                }
            }
        } catch (error) {
            dispatch({
                type: "ERROR_OCCURRED",
                payload: {
                    error: error.message,
                },
            });
        }
    };
}

export const SPRV2SingleApporveStateAction = { SPRV2SingleApporveStateAct };
