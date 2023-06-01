import Web3 from "web3";
import { HanBonusStakingContract } from "../../../config/StakingHanChain";
// import { StakingHanChainContract } from "../../../config/StakingHanchainTest";

function hanStakingTokenListViewAct(account) {
    return async (dispatch) => {
        try {
            // 내가 스테이킹한 순서별로 amount, timeStared 가 저장된 struct 배열 출력 함수
            const getHanStakerArrayApi = await HanBonusStakingContract.methods.getStakerArray(account).call();

            const getHanStakerDataArray = [];

            for (let i = 0; i < getHanStakerArrayApi.length; i++) {
                let hanArray = JSON.parse(JSON.stringify(getHanStakerArrayApi[i]));
                getHanStakerDataArray.push(hanArray);
            }

            // console.log(getHanStakerDataArray);

            for (let i = 0; i < getHanStakerDataArray.length; i++) {
                for (let j = 0; j < getHanStakerDataArray.length; j++) {
                    const newDate = new Date(getHanStakerDataArray[i][2] * 1000);
                    newDate.setFullYear(newDate.getFullYear() + 1); // 1년을 더합니다
                    const hanClaimYearsDate = newDate.getFullYear().toString().substr(2, 4);
                    const hanClaimDayDate = newDate.getDate();
                    const hanClaimHoursDate = newDate.getHours();
                    const hanClaimAmount = Web3.utils.fromWei(String(getHanStakerDataArray[i][0]), "ether");
                    getHanStakerDataArray[i].splice(4, 1, hanClaimYearsDate);
                    getHanStakerDataArray[i].splice(5, 1, hanClaimDayDate);
                    getHanStakerDataArray[i].splice(6, 1, hanClaimHoursDate);
                    getHanStakerDataArray[i].splice(7, 1, hanClaimAmount);
                }
            }

            // console.log("변환", getHanStakerDataArray);

            dispatch({
                type: "HAN_CHAIN_WITHDRAW_TOKEN_LIST",
                payload: {
                    getHanStakerDataArray: getHanStakerDataArray,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const hanStakingTokenListViewAction = { hanStakingTokenListViewAct };
