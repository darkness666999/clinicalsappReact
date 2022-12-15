import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Navbar,
    PageLayout,
    StyledNavLinkBtnPrimary,
    Loading,
} from '../common/CommonIndex';

const url = 'http://localhost:8080/clinicalservices/api/patients/analyze/';

const AnalyzeData = () => {
    const { patientId } = useParams();
    const [loading, setLoading] = useState(false);
    const [thePatient, setThePatient] = useState(null);

    React.useEffect(() => {
        setLoading(true);
        console.log(patientId);
        async function getBmi() {
            try {
                const response = await fetch(`${url}${patientId}`);
                const data = await response.json();
                if (data.clinicalData) {
                    setThePatient(
                        data.clinicalData.filter(
                            (item) => item.component_name === 'bmi'
                        )[0]
                    );
                } else {
                    setThePatient(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getBmi();
    }, [patientId]);

    if (loading) {

        return (
            <>
                <Navbar />
                <PageLayout>
                    <Loading align="center" />
                </PageLayout>
            </>
        );
    }

    if (!thePatient) {
        return (
            <>
                <Navbar />
                <PageLayout>
                    <h2 align="center">
                        There is not enough data to calculate patient bmi.
                    </h2>
                    <div align="center">
                        <StyledNavLinkBtnPrimary to={'/'}>
                            Go Back
                        </StyledNavLinkBtnPrimary>
                    </div>
                </PageLayout>
            </>
        );
    }

    console.log('thePAtient:', thePatient);
    const { component_value } = thePatient;

    return (
        <>
            <Navbar />
            <PageLayout>
                <section>
                    <h2 align="center">
                        BMI value
                    </h2>
                    <h2 align="center">{component_value}</h2>
                    <div align="center">
                        <StyledNavLinkBtnPrimary to={'/'}>
                            Go Back
                        </StyledNavLinkBtnPrimary>
                    </div>
                </section>
            </PageLayout>
        </>
    );
};

export default AnalyzeData;
