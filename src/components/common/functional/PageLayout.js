import React from 'react';
import { StyledContent } from '../CommonIndex';

export function PageLayout({children}){
    return (
        <>
            <StyledContent>{children}</StyledContent>
        </>
    );
}