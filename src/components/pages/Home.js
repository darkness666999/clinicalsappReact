import React from 'react';
import {Navbar, PageLayout, PatientList} from '../common/CommonIndex';

const Home = () => {
    return (
        <>
            <Navbar />
            <PageLayout>
                <PatientList />
            </PageLayout>
        </>
    );
};

export default Home;
