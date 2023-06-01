import { StakingPrivateRakis6Contract, StakingTokenContract, StakingPrivateRakis6Address } from "../config/new/StakingPrivateRakis6";
const account = 0;
const amount = 0;
const index = 0;
const participationCode = 123;

// 스테이킹 함수
const stake = await StakingPrivateRakis6Contract.methods.stake(participationCode, amount).send({ from: account });

// 출금 함수
const withdraw = await StakingPrivateRakis6Contract.methods.withdraw(index).send({ from: account });

// 클레임 함수
const claimReward = await StakingPrivateRakis6Contract.methods.claimReward().send({ from: account });

// StakingPrivateRakis6Contract 권한 부여하는 함수
const approve = await StakingTokenContract.methods.approve(StakingPrivateRakis6Address, amount).send({ from: account });

// StakingPrivateRakis6Contract 얼만큼 권한을 부여했는지 확인하는 함수
const allowance = await StakingTokenContract.methods.allowance(account, StakingPrivateRakis6Address).call({ from: account });

// 내가 스테이킹한 순서별로 amount, startTime, withdrwalTime, totalRewardAmount 가 저장된 struct 배열 출력 함수
const getStakerArrayData = await StakingPrivateRakis6Contract.methods.getStakerArrayData(account).call();

// index 입력시 남은 시간 출력 함수
const remainingDuration = await StakingPrivateRakis6Contract.methods.remainingDuration(account, index).call();

// 내가 받을 수 있는 총 보상 출력 함수
const rewardView = await StakingPrivateRakis6Contract.methods.rewardView(account).call();

// 컨트랙트에 유저들이 총 스테이킹 할 수 있는 토큰 양 출력 함수
const tokenQuota = await StakingPrivateRakis6Contract.methods.tokenQuota().call();

// 컨트랙트에 유저들이 총 스테이킹 한 금액 출력 함수
const totalSupply = await StakingPrivateRakis6Contract.methods.totalSupply().call();

// 총 보상받은 토큰 양
const totalRewardReleased = await StakingPrivateRakis6Contract.methods.totalRewardReleased(account).call();

// 내가 스테이킹한 총 토큰 양
const totalStakedAmount = await StakingPrivateRakis6Contract.methods.totalStakedAmount(account).call();

// 1 한 당 토큰 보상 양
const hanTokenPerLpToken = await StakingPrivateRakis6Contract.methods.hanTokenPerLpToken().call();
