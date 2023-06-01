import Web3 from "web3";
import { StakingPrivateUniV2Contract } from "../../../../config/new/StakingPrivateUniV2Config";
// import { StakingPrivateRakis6Contract } from "../../../../config/new/StakingPrivateRakis6";

function UniV2PrivateWithdrawListAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const getUniPrivateStakerArrayDataApi = await StakingPrivateUniV2Contract.methods.getStakerArray(account).call();

                const getUniPrivateStakerDataArray = [];

                for (let i = 0; i < getUniPrivateStakerArrayDataApi.length; i++) {
                    let hanArray = JSON.parse(JSON.stringify(getUniPrivateStakerArrayDataApi[i]));
                    getUniPrivateStakerDataArray.push(hanArray);
                }

                // console.log(getHanStakerDataArray);

                for (let i = 0; i < getUniPrivateStakerDataArray.length; i++) {
                    for (let j = 0; j < getUniPrivateStakerDataArray.length; j++) {
                        const newDate = new Date(getUniPrivateStakerDataArray[i][2] * 1000);
                        newDate.setFullYear(newDate.getFullYear() + 1); // 1년을 더합니다
                        const hanClaimYearsDate = newDate.getFullYear().toString().substr(2, 4);
                        const hanClaimDayDate = newDate.getDate();
                        const hanClaimHoursDate = newDate.getHours();
                        const hanClaimAmount = Web3.utils.fromWei(String(getUniPrivateStakerDataArray[i][0]), "ether");
                        getUniPrivateStakerDataArray[i].splice(4, 1, hanClaimYearsDate);
                        getUniPrivateStakerDataArray[i].splice(5, 1, hanClaimDayDate);
                        getUniPrivateStakerDataArray[i].splice(6, 1, hanClaimHoursDate);
                        getUniPrivateStakerDataArray[i].splice(7, 1, hanClaimAmount);
                    }
                }

                dispatch({
                    type: "UNIV2_PRIVATE_WITHDRAW_TOKENLIST",
                    payload: { getUniPrivateStakerDataArray: getUniPrivateStakerDataArray },
                });
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const UniV2PrivateWithdrawListAction = { UniV2PrivateWithdrawListAct };
