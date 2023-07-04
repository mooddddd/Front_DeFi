import { Box, Button } from '../../components';
import { VoteTitleDiv, ButtonStyled, AmountDiv, HeaderSection } from './styled';

export const GovernanceHeader = () => {
  return (
    <HeaderSection style={{ marginBottom: '70px' }}>
      <div>
        <h1>SOLARswap에 제안 등록하기</h1>
        <Button
          colors='blueBox'
          width='150px'
          height='35px'
          marginTop='20px'
          to='https://docs.klayswap.com/v/kr/product/governance'
        >
          거버넌스 정책 상세보기
        </Button>
      </div>
      <div>
        <Box width='260px' height='60px'>
          <VoteTitleDiv>
            <h5>보유 투표권</h5>
            <ButtonStyled>
              <h6>투표권 획득 방법 ❔</h6>
            </ButtonStyled>
          </VoteTitleDiv>
          <AmountDiv>
            <span>
              <strong>123</strong> vKSP
            </span>
          </AmountDiv>
        </Box>
      </div>
    </HeaderSection>
  );
};
