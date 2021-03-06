import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool, func, string } from 'prop-types';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { lighten, desaturate } from '@clarityhub/unity-core/lib/utilities/color';
import noop from '@clarityhub/unity-core/lib/utilities/noop';
import { opacify } from '@clarityhub/unity-core/lib/utilities/color';

const boxSize = 1.4;
const paddingSize = 0.25;

const getBorderRadius = (type) => {
	switch (type) {
	case 'checkbox':
		return `${borders.borderRadius.rem}rem`;
	case 'radio':
	default:
		return `50%`;
	}
};

const SelectionWrapper = styled.button`
    background: transparent;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    position: relative;

    label {
        cursor: pointer;
        display: inline-block;
        position: relative !important;
        vertical-align: middle;
    }
`;

const Input = styled.input`
    height: 1px;
    position: absolute;
    left: -9999px;
    width: 1px;
`;

const Box = styled.div`
    border: 1px solid ${colors.gray.default};
    background-color: transparent;
    box-sizing: border-box;
    display: inline-block;
    height: ${boxSize}rem;
    position: relative;
    vertical-align: middle;
    width: ${boxSize}rem;

    ${({ type }) => css`
        border-radius: ${getBorderRadius(type)};
    `}

    ${({ disabled }) => disabled && css`
        background-color: ${colors.muted.default};
    `}

    ${({ variant }) => {
		switch (variant) {
		case 'white':
			return `
                border: 1px solid ${colors.white.default};
                background-color: ${opacify(colors.white.default, 0.1)};
            `;
		default:
			return `
            `;
		}
	}}

    ${({ selected, disabled, type }) => selected && css`
        &:after {
            content: '';
            background-color: ${disabled ? desaturate(lighten(colors.primary.default, 0.3), 0.6) : colors.primary.default};
            border: 1px solid transparent;
            box-sizing: border-box;
            margin: ${paddingSize}rem;
            height: ${boxSize - (2 * paddingSize)}rem;
            position: absolute;
            top: -1px;
            left: -1px;
            width: ${boxSize - (2 * paddingSize)}rem;

            ${css`
              border-radius: ${getBorderRadius(type)};
            `}
        }
    `}
`;

export default (type = 'radio') => {
	return class Selection extends Component {
    static propTypes = {
    	disabled: bool,
    	onChange: func,
    	selected: bool,
    	variant: string,
    }

    static defaultProps = {
    	selected: false,
    	disabled: false,
    	onChange: noop,
    }

    onChange = (e) => {
    	const { onChange } = this.props;

    	onChange(e, this.input);
    }

    render() {
    	const { children, selected = false, disabled = false, variant, ...rest } = this.props;

    	return (
    		<SelectionWrapper
    			onClick={this.onChange}
    			selected={selected}
    			role="option"
    			aria-checked={Boolean(selected).toString()}
    			type="button"
    		>
    			<Input
    				ref={ref => this.input = ref}
    				type="option"
    				selected={selected}
    				disabled={disabled}
    				onChange={this.onChange}
    				tabIndex="-1"
    				{...rest}
    			/>

    			<Box
    				selected={selected}
    				disabled={disabled}
    				type={type}
    				variant={variant}
    			/>

    			{children}
    		</SelectionWrapper>
    	);
    }
	};
};
