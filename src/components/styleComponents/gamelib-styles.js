import styled from 'styled-components';

export const Wrap = styled.div`
  width:900px
  margin: 0 auto;
  background-color: ${props => props.backgroundColor || '#1b2838'};
`;

export const Div = styled.div`
  height:${props => props.height || '100%'};
  width:${props => props.width || '100%'};
  margin: ${props => props.margin || '0 auto'};
  margin-left: ${props => props.marginLeft || '0'}
  margin-top: ${props => props.marginTop || '0'}
  margin-right: ${props => props.marginRight || '0'}
  padding: ${props => props.padding || 'none'};
  float:${props => props.float || 'none'}
  text-align:${props => props.textAlign || 'none'}
  background-color: ${props => props.backgroundColor || 'none'};
  background-image: ${props => props.backgroundImage || 'none'};
`;

export const FlexDiv = styled.div`
  height:${props => props.height || 'none'};
  width:${props => props.width || 'none'};
  margin: ${props => props.margin || '0 auto'};
  margin-left: ${props => props.marginLeft || '0'}
  margin-top: ${props => props.marginTop || '0'}
  margin-right: ${props => props.marginRight || '0'}
  float:${props => props.float || 'none'}
  text-align:${props => props.textAlign || 'none'}
  background-color: ${props => props.backgroundColor || 'none'};
  border-bottom: ${props => props.borderBottom || 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Screen = styled.section`
  font-family: ${props => props.fontFamily || 'arial'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background-color: ${props => props.backgroundColor || '#1b2838'};
`;

export const HeadingWrap = styled.div`
  font-family: ${props => props.fontFamily || 'arial'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '150px'};
  background-color: ${props => props.backgroundColor || 'rgba(235,235,235)'};
`;

export const HeadingTitle = styled.h1`
  font-family: ${props => props.fontFamily || 'arial'};
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.color || '#000000'};
  margin-top: ${props => props.marginTop || 'none'};
  margin-right: ${props => props.marginRight || 'none'};
  margin-left: ${props => props.marginLeft || 'none'};
  float: ${props => props.float || 'none'};
  text-transform: ${props => props.textTransform || 'none'};
`;

export const GamePara = styled.p`
  font-family: ${props => props.fontFamily || 'arial'};
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.color || '#000000'};
  margin-top: ${props => props.marginTop || 'none'};
  margin-right: ${props => props.marginRight || 'none'};
  margin-left: ${props => props.marginLeft || 'none'};
`;

export const GradientHR = styled.hr`
  background: linear-gradient(
    to right,
    rgba(103, 193, 245, 0.8),
    rgba(103, 193, 245, 0)
  );
  height: 1px;
  border: 0;
  width: ${props => props.width || '100%'};
`;

export const Logo = styled.div`
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50x'};
  float: right;
`;

export const GameDivOverlay = styled.div`
  height: ${props => props.height || '260px'};
  width: ${props => props.width || '200px'}
  float: ${props => props.float || 'left'};
  background-image: linear-gradient(to right, rgba(11,16,23,0) ,rgba(11,16,23,.5));
  text-align: ${props => props.textAlign || 'center'};
  visibility: ${props => props.visible || 'hidden'};
  text-align: ${props => props.textAlign || 'center'};
  margin-left: ${props => props.marginLeft || 'none'};
  margin-top: ${props => props.marginTop || '0px'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GameDiv = styled.div`
  height: ${props => props.height || '300px'};
  width: ${props => props.width || '200px'}
  float: ${props => props.float || 'left'};
  margin-left: ${props => props.marginLeft || '10px'};
  margin-top: ${props => props.marginTop || '40px'};
  text-align: ${props => props.textAlign || 'center'};
  background-color: ${props => props.backgroundColor || 'none'};
  &:hover ${GameDivOverlay} {
  visibility: visible;
  }
`;

export const BoxArt = styled.div`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '260px'};
  background: ${props => props.background || 'none'};
  background-size: cover;
`;

export const GameInfo = styled.p`
  color: ${props => props.color || '#fff'};
  text-transform: uppercase;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: ${props => props.position || 'fixed'};
  z-index: 999999;
  left: 0;
  top: 0;
  background-color: #1b2838;
`;
