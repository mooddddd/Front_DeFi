import { useRecoilState } from 'recoil';
import {
  StakingBalance,
  StakingHeader,
  StakingMyVote,
  StakingPoolList,
  StakingPopup,
} from '../organisms/contents/staking';
import { stakingPopup } from '../organisms/store';

const stakingOption = [
  // 스테이킹 배수, 기간(개월)
  { times: 1, term: 4 },
  { times: 2, term: 8 },
  { times: 4, term: 12 },
  { times: 8, term: '12+a' },
];

const testArr = [
  // 수익률 박스입니다. 퍼센트는 데이터 받아오면 계산해서 넘겨주면 될 것 같아요!
  { label: '스테이킹', percent: '19.14' },
  { label: '드랍스', percent: '17.96' },
  { label: '풀투표', percent: '8.74' },
];

// 예상 수익률
const testRewardRate = { min: '5.79', max: '46.36' }; // 헤더 박스
const stakingRewardRate = { min: '2.36', max: '18.89' }; // 밸런스 박스

const testAmounts = {
  // 스테이킹 수량, 보상 수량
  stakingAmount: '23',
  rewardAmount: '123',
  holeAmount: '2342',
};

// 스테이킹이 가능한지 아닌지 값인데... 얘를 어떻게 처리해야 할까요...
const state = { staking: true, unstaking: true, reward: false };

const testData = {
  // 투표권
  myVote: '1234',
  participate_amount: '12',
};

// 스테이킹 풀 투표 목록
const testTokenData = [
  {
    token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
    token2: { name: '테더', symbol: 'USDT', logo: 'tether' },
    estimateRate: '12.65%',
  },
  {
    token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
    token2: { name: '이더리움', symbol: 'ETH', logo: 'ethereum' },
    estimateRate: '4.23%',
  },
  {
    token1: { name: '솔라스왑', symbol: 'ASD', logo: 'solar' },
    token2: { name: '아비트럼', symbol: 'ARB', logo: 'arbitrum' },
    estimateRate: '27.98%',
  },
];

export const Staking = () => {
  const [staking] = useRecoilState(stakingPopup);

  return (
    <div>
      <StakingHeader reward={testArr} rate={testRewardRate} />
      <StakingBalance
        amounts={testAmounts}
        state={state}
        stakingRewardRate={stakingRewardRate}
      />
      <StakingMyVote voteAmount={testData} />
      <StakingPoolList tokenData={testTokenData} />
      {staking && <StakingPopup option={stakingOption} reward={testArr} />}
    </div>
  );
};
