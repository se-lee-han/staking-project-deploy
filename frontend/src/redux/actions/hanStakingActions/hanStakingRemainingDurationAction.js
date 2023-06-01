import { HanBonusStakingContract } from "../../../config/StakingHanChain";
// import { StakingHanChainContract } from "../../../config/StakingHanchainTest";

function hanStakingRemainingDurationAct(account, index) {
    return async (dispatch) => {
        try {
            const hanRemainingDurationToContract = await HanBonusStakingContract.methods.remainingDuration(account, index).call();

            // console.log("Action Remaining", hanRemainingDurationToContract);

            const hanRemainingDurationApi = hanRemainingDurationToContract * 1000;
            // console.log("remaining act", hanRemainingDurationApi);

            const hanClaimDayDateApi = String(Math.floor(hanRemainingDurationApi / (1000 * 60 * 60 * 24))).padStart(2, "0");
            // console.log(hanClaimDayDateApi);
            const hanClaimHoursDateApi = String(Math.floor(hanRemainingDurationApi / (1000 * 60 * 60)) % 24).padStart(2, "0");
            // console.log(hanClaimHoursDateApi);
            const hanClaimMinDateApi = String(Math.floor((hanRemainingDurationApi / (1000 * 60)) % 60)).padStart(2, "0");
            // console.log(hanClaimMinDateApi);

            const hanClaimSecDateApi = String(Math.floor((hanRemainingDurationApi / 1000) % 60)).padStart(2, "0");

            dispatch({
                type: "HANCHAIN_DURATION_TIMESTAMP",
                payload: {
                    hanClaimDayDate: hanClaimDayDateApi,
                    hanClaimHoursDate: hanClaimHoursDateApi,
                    hanClaimMinDate: hanClaimMinDateApi,
                    hanClaimSecDate: hanClaimSecDateApi,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const hanStakingRemainingDurationAction = { hanStakingRemainingDurationAct };
