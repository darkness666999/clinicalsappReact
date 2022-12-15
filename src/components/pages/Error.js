import React from "react";
import { Navbar, PageLayout, StyledNavLinkBtnPrimary } from '../common/CommonIndex';

const Error = () =>{
    return (
        <>
            <Navbar />
            <PageLayout>
                <section>
                    <div>
                        <h1>Oops! it's a dead end</h1>
                        <StyledNavLinkBtnPrimary to="/">
                            Back home
                        </StyledNavLinkBtnPrimary>
                    </div>
                </section>
            </PageLayout>
        </>
    );
}

export default Error