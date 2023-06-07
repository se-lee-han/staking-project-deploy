import { SheepooriTokenContract } from "../../../../config/SheepooriStakingConfig";

function oldSprStakingSingleApproveStateAct(account, stakingmyTokenId) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // SingleApprove 상태
                const getSingleApprovedAPi = await SheepooriTokenContract.methods.getApproved(stakingmyTokenId).call();

                let [getSingleApproved] = await Promise.all([getSingleApprovedAPi]);

                dispatch({
                    type: "GET_OLD_SPR_STAKING_SINGLE_RESULT_VIEW_SUCCESS",
                    payload: {
                        getOldSprSingleApproved: getSingleApproved,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const oldSprStakingSingleApproveStateAction = { oldSprStakingSingleApproveStateAct };
