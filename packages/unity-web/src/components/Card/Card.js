import styled from '@emotion/styled';
import { css } from '@emotion/core';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';

import { CardHeaderWrapper } from './CardHeader';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${colors.white.default};
    background-clip: border-box;
    border-radius: ${borders.borderRadius.rem}rem;
    box-shadow: ${colors.shadow.default};

    > :not(${CardHeaderWrapper}) {
        h3 {
            margin: 0;
            padding: 0;
        }

        h4 {
            margin-top: 0.6rem;
        }

        p:only-child {
            margin: 0;
        }
    }

    ${({ center }) => center && css`
        text-align: center;
    `}
`;

export default Card;