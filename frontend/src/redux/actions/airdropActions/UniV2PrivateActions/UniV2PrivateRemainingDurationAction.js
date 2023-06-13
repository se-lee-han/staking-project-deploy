import { StakingPrivateUniV2Contract } from "../../../../config/new/StakingPrivateUniV2Config";

function UniV2PrivateRemainingDurationAct(account, index) {
    return async (dispatch) => {
        try {
            if (account) {
                const privateRemainingDurationToContract = await StakingPrivateUniV2Contract.methods.remainingDuration(account, index).call();

                const privateRemainingDurationApi = privateRemainingDurationToContract * 1000;

                const prUniV2ClaimDayDateApi = String(Math.floor(privateRemainingDurationApi / (1000 * 60 * 60 * 24))).padStart(2, "0");
                const prUniV2ClaimHoursDateApi = String(Math.floor(privateRemainingDurationApi / (1000 * 60 * 60)) % 24).padStart(2, "0");
                const prUniV2ClaimMinDateApi = String(Math.floor((privateRemainingDurationApi / (1000 * 60)) % 60)).padStart(2, "0");
                const prUniV2ClaimSecDateApi = String(Math.floor((privateRemainingDurationApi / 1000) % 60)).padStart(2, "0");
                dispatch({
                    type: "PRIVATE_UNIV2_DURATION_TIMESTAMP",
                    payload: {
                        prUniV2ClaimDayDate: prUniV2ClaimDayDateApi,
                        prUniV2ClaimHoursDate: prUniV2ClaimHoursDateApi,
                        prUniV2ClaimMinDate: prUniV2ClaimMinDateApi,
                        prUniV2ClaimSecDate: prUniV2ClaimSecDateApi,
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

export const UniV2PrivateRemainingDurationAction = { UniV2PrivateRemainingDurationAct };
