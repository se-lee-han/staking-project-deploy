import {
    StakingTokenContract,
    RewardTokenContract,
    StakingRakis6Contract,
    RewardTokenAddress,
    StakingRakis6Address,
} from "../config/new/StakingRakis6ConfigTest";

const amount = 0;
const account = "account";

// 리워드 토큰 양 확인
const rewardTokenBalance = await RewardTokenContract.methods.balanceOf(RewardTokenAddress).call();

// approve
const approve = await StakingTokenContract.methods.approve(StakingRakis6Address, amount).send({ from: account });

const stake = await StakingRakis6Contract.methods.stake(amount).send({ from: account });

const withdraw = await StakingRakis6Contract.methods.withdraw(amount).send({ from: account });

const claimReward = await StakingRakis6Contract.methods.claimReward().send({ from: account });

// 1 한 당 토큰 보상 양
const hanTokenPerLpToken = await StakingRakis6Contract.methods.hanTokenPerLpToken().call();

// 실시간 보상 받을 수 있는 토큰 양
const rewardView = await StakingRakis6Contract.methods.rewardView(account).call();

// 내가 스테이킹한 정보 (amount: 스테이킹한 금액, startTime: 스테이킹 시작한 시간, rewardReleased: 총 보상 받은 양, unclaimedReward: 클레임 받지 않은 보상 토큰 양)
const staker = await StakingRakis6Contract.methods.stakers(account).call();

// 컨트랙트에 스테이킹 할 수 있는 토큰 양
const tokenQuota = await StakingRakis6Contract.methods.tokenQuota().call();

// 컨트랙트에 유저들이 스테이킹한 토큰 양
const totalSupply = await StakingRakis6Contract.methods.totalSupply().call();
