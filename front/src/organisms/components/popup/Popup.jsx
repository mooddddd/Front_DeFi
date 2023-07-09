import { Wrap, ContentWrap, Content, ModalOverlay } from './styled';

export const Popup = ({ children, width, height, padding }) => {
  return (
    <Wrap>
      <ContentWrap width={width} height={height}>
        <Content padding={padding}>{children}</Content>
      </ContentWrap>
    </Wrap>
  );
};
