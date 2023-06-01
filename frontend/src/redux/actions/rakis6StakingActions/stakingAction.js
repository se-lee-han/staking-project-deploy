import { StakingContract, StakingAddress, web3 } from "../../../config/StakingRakis6Config";
// import { StakingContract, StakingAddress, web3 } from "../../../config/StakingRakis6ConfigTest";
import Swal from "sweetalert2";

function stakingAct(account, stakingAmount) {
    return async (dispatch) => {
        try {
            // const stake = await web3.eth.sendTransaction({
            //     from: account,
            //     to: StakingAddress,
            //     gasPrice: "3000000",
            //     data: StakingContract.methods.stake(stakingAmount).encodeABI(),
            // });
            const stake = await StakingContract.methods.stake(stakingAmount).send({ from: account });

            Swal.fire({
                title: "Success",
                text: "Staking was successful!",
                icon: "success",
                confirmButtonColor: "#3085d6",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
            dispatch({
                type: "SUCCESS_STAKING",
                payload: { successStaking: true },
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Fail",
                text: "Staking was Fail!",
                icon: "error",

                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
            });
        }
    };
}

export const stakingAction = { stakingAct };
