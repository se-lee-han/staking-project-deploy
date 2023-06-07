import BigNumber from "bignumber.js";
import { StakingPrivateUniV2Contract, uniV2Contract, web3 } from "../../../../config/new/StakingPrivateUniV2Config";

function UniV2PrivateAPRViewAct(account) {
    const AmountBN = new BigNumber("1000000000000000000");

    return async (dispatch) => {
        try {
            if (account) {
                const getPrHanEpTokenPerLpTokenAPi = StakingPrivateUniV2Contract.methods.hanTokenPerLpToken().call();
                console.log("result", getPrHanEpTokenPerLpTokenAPi);

                const getUniV2HapEpTotalSupplyApi = uniV2Contract.methods.totalSupply().call();

                const getUniV2HapEpGetReservesApi = uniV2Contract.methods.getReserves().call();

                const [getHanEpTokenPerLpToken, totalSupply, reserves] = await Promise.all([getPrHanEpTokenPerLpTokenAPi, getUniV2HapEpTotalSupplyApi, getUniV2HapEpGetReservesApi]);

                const hanEpTokenPerLpToken = web3.utils.fromWei(getHanEpTokenPerLpToken, "ether");
                const AmountBNInEther = web3.utils.fromWei(AmountBN.toString(), "ether");
                const reservesInEther = web3.utils.fromWei(reserves._reserve0.toString(), "ether");
                const totalSupplyInEther = web3.utils.fromWei(totalSupply.toString(), "ether");
                const calculatedValue = new BigNumber(AmountBNInEther).dividedBy(reservesInEther).multipliedBy(totalSupplyInEther).toFixed(18); // Truncate the last 18 digits

                const truncatedValue = parseFloat(calculatedValue);

                const stakingPrUniV2APR = parseFloat((hanEpTokenPerLpToken * 60 * 60 * 24 * 365 * truncatedValue * 100).toFixed(2));
                console.log(stakingPrUniV2APR);

                dispatch({
                    type: "PRIVATE_UNIV2_APR",
                    payload: {
                        stakingPrUniV2APR: stakingPrUniV2APR,
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

export const UniV2PrivateAPRViewAction = { UniV2PrivateAPRViewAct };
