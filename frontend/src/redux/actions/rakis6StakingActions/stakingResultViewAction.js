import { StakingContract } from "../../../config/StakingRakis6Config";
// import { StakingContract } from "../../../config/StakingRakis6ConfigTest";
import web3 from "web3";
import BigNumber from "bignumber.js";

function stakingResultViewAct(account) {
    const AmountBN = new BigNumber("1000000000000000000");

    return async (dispatch) => {
        try {
            if (account !== "") {
                const getAmountApi = await StakingContract.methods.getAmount(account).call();
                // console.log("getAmount", getAmountApi);

                const getAmountFromWei = web3.utils.fromWei(String(getAmountApi), "ether");
                // console.log("test1", testgetAmountApi);
                const getStakingStartTimeApi = await StakingContract.methods.getStakingStartTime(account).call();
                // console.log("StartStakingTime", getStakingStartTimeApi);
                const getRewardReleasedApi = await StakingContract.methods.getRewardReleased(account).call();

                const getBalanceApi = await StakingContract.methods.getBalance(account).call();

                const currentTimeApi = Math.floor(new Date().getTime() / 1000);
                // console.log(currentTimeApi);

                const hanTokenPerLpTokenApi = await StakingContract.methods.hanTokenPerLpToken().call();
                // console.log("hanTokenPerLp", hanTokenPerLpTokenApi);
                const hanTokenPerLpFromWei = web3.utils.fromWei(String(hanTokenPerLpTokenApi), "ether");
                // console.log("hanTokenPerLp", testHanTokenPerLp);
                const stakedTime = currentTimeApi - getStakingStartTimeApi;
                const resultValueApi = stakedTime * (getAmountFromWei * hanTokenPerLpFromWei);
                // const resultValueApi = stakedTime * (getAmountApi * hanTokenPerLpTokenApi);

                // const resultValueApi = web3.utils.fromWei(String(stakedTime * (getAmountApi * hanTokenPerLpTokenApi)), "ether");
                // console.log("result", resultValueApi);

                let [resultValue, getBalance, getRewardReleased] = await Promise.all([resultValueApi, getBalanceApi, getRewardReleasedApi]);

                dispatch({
                    type: "GET_STAKING_RESULT_VIEW_SUCCESS",
                    payload: {
                        // resultValue: Math.floor(resultValue * 100000000) / 100000000,
                        // getBalance: Math.floor((getBalance / 10 ** 18) * 100000000) / 100000000,
                        // getRewardReleased: Math.floor((getRewardReleased / 10 ** 18) * 100000000) / 100000000,
                        resultValue: resultValue.toFixed(18),
                        getBalance: web3.utils.fromWei(String(getBalance), "ether"),
                        getRewardReleased: web3.utils.fromWei(String(getRewardReleased), "ether"),
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const stakingResultViewAction = { stakingResultViewAct };
