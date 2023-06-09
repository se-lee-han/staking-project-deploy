import { MunieTokenContract } from "../../../config/MunieConfig";
// import { MunieTokenContract } from "../../../config/MunieConfigTest";
import BigNumber from "bignumber.js";

function oldMunieSingleApproveStateAct(stakingMunieTokenId, account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                const getOldMunieSingleApprovedApi = await MunieTokenContract.methods.getApproved(stakingMunieTokenId).call();

                // 유효성 검사를 수행하여 잘못된 BigNumber 문자열 값인지 확인
                if (BigNumber.isBigNumber(getMunieSingleApprovedApi)) {
                    dispatch({
                        type: "GET_OLD_MUNIE_SINGLE_APPROVE_STATE_VIEW",
                        payload: {
                            getOldMunieSingleApproved: getOldMunieSingleApprovedApi,
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

export const oldMunieSingleApproveStateAction = { oldMunieSingleApproveStateAct };
