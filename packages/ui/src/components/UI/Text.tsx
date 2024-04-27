import styled, { css } from 'styled-components';

type TextColor = 'primary' | 'secondary' | 'alert';
const fontColor: Record<TextColor, string> = {
  primary: 'black',
  secondary: 'grey',
  alert: 'red',
};

type TextWeight = 'regular' | 'semibold' | 'bold';
const fontWeight: Record<TextWeight, number> = {
  regular: 400,
  semibold: 500,
  bold: 600,
};

type TextHeight = 'small' | 'regular' | 'large';
const lineHeight: Record<TextHeight, number> = {
  small: 1,
  regular: 1.2,
  large: 1.5,
};

export interface TextProps {
  color?: TextColor;
  weight?: TextWeight;
  size?: number;
  height?: TextHeight;
  centered?: boolean;
  cropped?: boolean;
  nowrap?: boolean;
}

export const oneRemInPx = 16;

const getFontSize = (sizeInPx: number) => {
  const sizeInRem = sizeInPx / oneRemInPx;

  return `${sizeInRem}rem`;
};

const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;

  ${({ color }) =>
    color &&
    css`
      color: ${fontColor[color]};
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${fontWeight[weight]};
    `}
  ${({ height }) =>
    height &&
    css`
      line-height: ${lineHeight[height]};
    `}
  ${({ size }) =>
    size &&
    css`
      font-size: ${getFontSize(size)};
    `}
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
    `}

  ${({ cropped }) =>
    cropped &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export default Text;
