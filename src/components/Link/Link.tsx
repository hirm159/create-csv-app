import React from 'react';
import { Button as RbButton } from 'react-bootstrap';

export type LinkProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Link: React.FC<LinkProps> = (props) => {
    return (
        <RbButton
            variant={"link"}
            onClick={props.onClick}
        >
            {props.children}
        </RbButton>
    );
};