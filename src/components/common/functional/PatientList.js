import React from "react";
import { StyledNavLinkBtnPrimary, Patient, Loading } from '../CommonIndex';
import { useGlobalContext } from "../../../context";

export function PatientList(){
    const {patients,loading} = useGlobalContext();

    if(loading){
        return <Loading />
    }

    if(patients.length < 1){
        return(
            <h2>
                No patients matched your search criteria
            </h2>
        )
    }

    return (
        <section>
            <h2 align="center">
                Patient List
            </h2>
            <table align="center">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((item) => {
                        return <Patient key={item.id} {...item} />;
                    })}
                </tbody>
            </table>
            <br />
                <StyledNavLinkBtnPrimary to={'/addPatient'}>
                    <label align='center'>Register Patient</label>
                </StyledNavLinkBtnPrimary>
            <br />
        </section>
    );
}
