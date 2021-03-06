import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { bool, node, oneOf } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';
import { opacify } from '@clarityhub/unity-core/lib/utilities/color';
import { variants } from '@clarityhub/unity-core/lib/typography';

const Badge = styled('div', {
	shouldForwardProp: prop => isPropValid(prop) && !['type'].includes(prop),
})`
    overflow: visible;
    text-transform: none;
    display: inline-block;

    ${variants.button.string}

    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 0 solid transparent;
    padding: 0.1rem 0.4rem;
    font-size: 0.8rem;
    line-height: 1.2;
    border-radius: 2rem;
    position: relative;
    text-transform: uppercase;

    ${({ type }) => {
		switch (type) {
		case 'primary':
			return css`
                    color: ${colors.primary.default};
                    background-color: ${opacify(colors.primary.default, 0.25)};
                    border-color: ${opacify(colors.primary.default, 0.25)};
                `;
		case 'success':
			return css`
                    color: ${colors.success.default};
                    background-color: ${opacify(colors.success.default, 0.25)};
                    border-color: ${opacify(colors.success.default, 0.25)};
                `;
		case 'danger':
			return css`
                    color: ${colors.danger.default};
                    background-color: ${opacify(colors.danger.default, 0.25)};
                    border-color: ${opacify(colors.danger.default, 0.25)};
                `;
		case 'notification':
			return css`
                    color: ${colors.white.default};
                    background-color: ${colors.notification.default};
                    border-color: ${colors.notification.default};
                `;
		case 'default':
		default:
			return css`
                    color: ${colors.black.default};
                    background-color: ${colors.muted.default};
                    border-color: ${colors.gray.default};
                `;
		}
	}}
    
    ${({ square }) => square && css`
        cursor: pointer;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-radius: 5px;
    `}

    ${({ size }) => size === 'large' && css`
        font-size: 1rem;
    `}

    ${({ noTransform }) => noTransform && css`
        text-transform: none;
        font-weight: 500;
    `}

    ${({ outline, type }) => outline && css`
        background: transparent;
        border-width: 1px;
        border-style: solid;

        ${type === 'notification' && css`
            color: ${colors.notification.default};
        `}
    `}
`;

/**
 * Hack for docz and react-docgen
 */
const BadgePropTypes = () => <div />;
BadgePropTypes.propTypes = {
	children: node,
	noTransform: bool,
	outline: bool,
	size: oneOf(['default', 'large']),
	square: bool,
	type: oneOf(['primary', 'success', 'danger', 'notification', 'default']),
};
Badge.propTypes = BadgePropTypes.propTypes;
export { BadgePropTypes };

export default Badge;
