import { MusikhanStakingAddress } from "../../../../config/MusikhanConfig";
// import { MusikhanStakingAddress } from "../../../../config/MusikhanConfigTest";

// import { ContractNoAddressDefinedError } from "../errors";

import Web3 from "web3";
function L2DepositTokenBalanceAct(account, L2TokenContract) {
    return async (dispatch) => {
        try {
            // if (!L2TokenContract) {
            //     throw new Error("Contract address is not defined.");
            // }

            if (account) {
                const L2DepositBalanceOfApi = await L2TokenContract.methods.balanceOf(account).call();
                const L2DepositBalanceStringApi = Web3.utils.fromWei(String(L2DepositBalanceOfApi), "ether");

                const musiAllowanceToContract = await L2TokenContract.methods.allowance(account, MusikhanStakingAddress).call();
                const musiAllowanceApi = Web3.utils.fromWei(String(musiAllowanceToContract), "ether");
                dispatch({
                    type: "L2_DEPOSIT_BALANCE",
                    payload: {
                        L2DepositBalance: L2DepositBalanceStringApi,
                        musiAllowance: musiAllowanceApi,
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

export const L2DepositTokenBalanceAction = { L2DepositTokenBalanceAct };
