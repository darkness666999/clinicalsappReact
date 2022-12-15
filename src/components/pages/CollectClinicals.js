import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import {
    Navbar,
    PageLayout,
    ClinicalRecord,
    Loading,
    StyledNavLinkBtnPrimary,
    StyledForm,
    StyledInput,
    StyledButton,
    StyledSelect
} from '../common/CommonIndex';


const CollectClinicals = () => {
    const { patients, loading, setClinicalData } = useGlobalContext();

    const params = useParams();
    var thePatient = patients.filter(
        (item) => String(item.id) === String(params.patientId)
    )[0];

    if (loading) {
        return <Loading />;
    }

    if (thePatient.clinicalData.length < 1) {
        return (
            <h2 className="section-title">
                No clinical records for this patient
            </h2>
        );
    }

    const data = {
        patientId: params.patientId,
        componentName: 'bp',
        componentValue: '',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setClinicalData(data);
    };

    return (
        <>
            <Navbar />
            <PageLayout>
                <section>
                    <h2 align="center">
                        {thePatient.first_name} {thePatient.last_name}
                    </h2>
                    <h2 align="center">Age {thePatient.age}</h2>
                    <h2
                        className="section-title"
                        align="center"
                        fontStyle="bold"
                    >
                        New clinical record:
                    </h2>

                    <StyledForm>
                        <StyledSelect
                            onChange={(event) => {
                                data.componentName = event.target.value;
                            }}
                        >
                            <option value="bp">Blood Pressure(Sys/Dis)</option>
                            <option value="hw">Height/Weight</option>
                            <option value="heartrate">Heart Rate</option>
                        </StyledSelect>
                        <StyledInput
                            type="text"
                            name="componentValue"
                            placeholder="Value"
                            onChange={(event) => {
                                data.componentValue = event.target.value;
                            }}
                        />
                        <StyledButton onClick={handleSubmit}>Confirm</StyledButton>
                    </StyledForm>
                    <br />
                    <h2 align="center">Clinical records:</h2>
                    <table align="center">
                        <thead>
                            <tr>
                                <th>Comp Name</th>
                                <th>Comp Value</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thePatient.clinicalData.map((item) => {
                                return (
                                    <ClinicalRecord key={item.id} {...item} />
                                );
                            })}
                        </tbody>
                    </table>
                    <br />
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

export default CollectClinicals;
