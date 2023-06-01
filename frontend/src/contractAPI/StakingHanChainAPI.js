import { StakingHanChainContract } from "../config/StakingHanchainTest";

const amount = 0;
const account = "지갑주소";
const index = 0;

const stake = await StakingHanChainContract.methods.stake(amount).send({ from: account });

const withdraw = await StakingHanChainContract.methods.withdraw(index).send({ from: account });

const claimReward = await StakingHanChainContract.methods.claimReward().send({ from: account });

// 컨트랙트가 보상으로 줄 수 있는 토큰 양
const rewardableAmount = await StakingHanChainContract.methods.rewardableAmount().call();

// 컨트랙트에 유저들이 스테이킹한 총 토큰 양
const totalSupply = await StakingHanChainContract.methods.totalSupply().call();

// 스테이킹하면 주는 보상 양
const hanTokenInterest = await StakingHanChainContract.methods.hanTokenInterest().call();

// 내가 스테이킹한 정보 배열 (금액 : amount, 시작 시간: startTime, 출금 가능 시간: withdrawlTime, 지급 받은 보상 양: rewardReleased)
const stakerArray = await StakingHanChainContract.methods.stakerArray(account, index).call();

// 수정 ------------------------------------
// 지금 까지 스테이킹한 총 토큰 양
const totalStakedAmount = await StakingHanChainContract.methods.totalStakedAmount(account).call();

// 내가 스테이킹한 정보 총 배열
const getStakerArray = await StakingHanChainContract.methods.getStakerArray(account).call();

// 인덱스 입력하면 출금 가능 시간 출력
const remainingDuration = await StakingHanChainContract.methods.remainingDuration(account, index).call({ from: account });

// 추가 --------------------------------------

// 지금 까지 내가 받은 총 보상 양
const totalRewardReleased = await StakingHanChainContract.methods.totalRewardReleased(account).call();

// 내가 받을 수 있는 보상 양 실시간으로 계산
const rewardView = await StakingHanChainContract.methods.rewardView(account).call();
